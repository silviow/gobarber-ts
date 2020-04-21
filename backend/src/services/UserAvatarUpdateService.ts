import fs from 'fs';
import path from 'path';
import { getRepository } from 'typeorm';
import User from '../models/User';
import uploadConfig from '../config/upload';
import AppError from '../errors/AppError';

interface RequestDTO {
    user_id: string;
    filename: string;
}

class UserAvatarUpdateService {
    public async execute({ user_id, filename }: RequestDTO): Promise<User> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne(user_id);

        if (!user) {
            throw new AppError(
                'Only authenticated users can change their avatar.',
                401,
            );
        }

        if (user.avatar) {
            const userAvatarFilePath = path.join(
                uploadConfig.directory,
                user.avatar,
            );

            const userAvatarExists = await fs.promises.stat(userAvatarFilePath);

            if (userAvatarExists) {
                await fs.promises.unlink(userAvatarFilePath);
            }
        }

        user.avatar = filename;

        await usersRepository.save(user);

        return user;
    }
}

export default UserAvatarUpdateService;
