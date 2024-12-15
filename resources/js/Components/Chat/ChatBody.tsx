import MessageBubble from "./MessageBubble";
import { IUser } from "@/types/IUser";
import { IMessage } from "@/types/IMessage";
import { usePage } from "@inertiajs/react";
import Echo from "laravel-echo";
import { useEffect, useState } from "react";

export default function ChatBody({ user, messages: initialMessages }: { user: IUser, messages: IMessage[] }) {
    
    const authenticatedUser: IUser = usePage().props.auth.user;
    const channelName = 'chat.' + (
        user.id > authenticatedUser.id
            ? user.id + '.' + authenticatedUser.id
            : authenticatedUser.id + '.' + user.id
    );

    const [messages, setMessages] = useState<IMessage[]>(initialMessages);

    useEffect(() => {
        const channel = window.Echo.private(channelName)
            .listen('MessageSent', (e: { message: IMessage }) => {
                setMessages((prevMessages) => [...prevMessages, e.message]);
            });

        return () => {
            channel.stopListening('MessageSent');
        };
    }, [channelName]);


    return (
        <div className="flex-1 p-6 overflow-y-auto bg-gray-100 h-[45vh] flex flex-col justify-end">
            {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
            ))}
        </div>
    );
}
