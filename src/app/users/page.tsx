import { prisma } from "../../backend/prismaClient";

export default async function Users() {
    const users = await prisma.user.findMany();

    return (
        <div>
            <h1>Users</h1>
            {users.map((user, index) => (
                <p key={index}>{user.name}</p>
            ))}
        </div>
    );
}
