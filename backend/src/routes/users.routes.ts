import { Router } from 'express';
import UserCreationService from '../services/UserCreationService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
    try {
        const { name, email, password } = request.body;

        const createUser = new UserCreationService();

        const user = await createUser.execute({
            name,
            email,
            password,
        });

        delete user.password;

        return response.json(user);
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

export default usersRouter;
