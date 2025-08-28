import { v4 as uuidv4 } from 'uuid';

export function generateRandomEmail() {
    return `testuser_${uuidv4()}@example.com`;
}