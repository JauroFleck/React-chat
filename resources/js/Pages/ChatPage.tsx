import Chat from '@/Components/Chat/Chat';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { IMessage } from '@/types/IMessage';
import { IUser } from '@/types/IUser';
import { Head } from '@inertiajs/react';
import { Box } from '@mui/material';

export default function ChatPage({ user, messages }: { user: IUser, messages: IMessage[] }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Chat
                </h2>
            }
        >
            <Head title="Chat" />

            <Box sx={{ height: '100%', width: '60%', margin: 'auto' }}>
                <Chat user={user} messages={messages} />
            </Box>
            
        </AuthenticatedLayout>
    );
}
