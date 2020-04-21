import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import User from '../models/User';

interface RequestDTO {
    email: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}

class SessionCreationService {
    public async execute({ email, password }: RequestDTO): Promise<Response> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({ where: { email } });

        if (!user) {
            throw new Error('Incorrect combination of email and password.');
        }

        const validatedPassword = await compare(password, user.password);

        if (!validatedPassword) {
            throw new Error('Incorrect combination of email and password.');
        }

        const token = sign({}, '306d5ab60604d3c5dfa8f5112aa13d8a', {
            subject: user.id,
            expiresIn: '1d',
        });

        return {
            user,
            token,
        };
    }
}

export default SessionCreationService;
