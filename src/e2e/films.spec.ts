import { seed } from '../config/db.seed.ts';
import { seed } from '../config/db-test.seed.ts';
import Request from 'supertest';
import { connectDB } from '../config/db-config.ts';
import { createApp } from '../app.ts';

describe('');

test('Sample', async () => {
    const prisma = await connectDB();
    const app = createApp(prisma);
    seed();
    await request(app).get('/api/films').expect(201);
});
