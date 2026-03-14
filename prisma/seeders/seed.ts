import { PrismaClient, RoleName } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('--- Starting Seeding ---')

  // 1. Seed Roles
  console.log('Seeding Roles...')
  const superAdminRole = await prisma.role.upsert({
    where: { name: RoleName.SUPER_ADMIN },
    update: {},
    create: {
      name: RoleName.SUPER_ADMIN,
      description: 'System Super Administrator',
      is_system: true,
    },
  })

  const clientRole = await prisma.role.upsert({
    where: { name: RoleName.CLIENT },
    update: {},
    create: {
      name: RoleName.CLIENT,
      description: 'Standard Client User',
      is_system: true,
    },
  })

  const testerRole = await prisma.role.upsert({
    where: { name: RoleName.TESTER },
    update: {},
    create: {
      name: RoleName.TESTER,
      description: 'Beta Tester User',
      is_system: true,
    },
  })

  console.log('Roles seeded.')

  // 2. Seed Plans
  console.log('Seeding Plans...')
  await prisma.plan.upsert({
    where: { slug: 'free' },
    update: {},
    create: {
      name: 'Free',
      slug: 'free',
      description: 'Basic features for testing',
      price_monthly: 0,
      price_yearly: 0,
      trial_days: 0,
    },
  })

  await prisma.plan.upsert({
    where: { slug: 'pro' },
    update: {},
    create: {
      name: 'Pro',
      slug: 'pro',
      description: 'Advanced features for growing businesses',
      price_monthly: 29.99,
      price_yearly: 299.99,
      trial_days: 14,
    },
  })

  await prisma.plan.upsert({
    where: { slug: 'enterprise' },
    update: {},
    create: {
      name: 'Enterprise',
      slug: 'enterprise',
      description: 'Full features for large organizations',
      price_monthly: 99.99,
      price_yearly: 999.99,
      trial_days: 30,
    },
  })

  console.log('Plans seeded.')

  // 3. Seed Users
  console.log('Seeding Users...')
  
  const users = [
    {
      name: 'Admin User',
      email: 'admin@humanized.bot',
      roleId: superAdminRole.id,
    },
    {
      name: 'Client User',
      email: 'client@humanized.bot',
      roleId: clientRole.id,
    },
    {
      name: 'Tester User',
      email: 'tester@humanized.bot',
      roleId: testerRole.id,
    },
  ]

  for (const u of users) {
    const user = await prisma.user.upsert({
      where: { email: u.email },
      update: {},
      create: {
        name: u.name,
        email: u.email,
        password_hash: 'hashed_password_123',
        is_verified: true,
      },
    })

    // Assign Role
    await prisma.userRole.upsert({
      where: {
        id: `${user.id}-${u.roleId}`, // This is a hack for upsert since we don't have a unique composite
      },
      update: {},
      create: {
        id: crypto.randomUUID(), // Using random UUID for ID
        user_id: user.id,
        role_id: u.roleId,
      },
    }).catch(async () => {
        // Fallback for user role creation if upsert fails due to ID mismatch
        const existing = await prisma.userRole.findFirst({
            where: { user_id: user.id, role_id: u.roleId }
        })
        if(!existing) {
            await prisma.userRole.create({
                data: { user_id: user.id, role_id: u.roleId }
            })
        }
    })
  }

  console.log('Users seeded.')
  console.log('--- Seeding Completed ---')
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
