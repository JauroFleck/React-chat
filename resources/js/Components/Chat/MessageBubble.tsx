import { IMessage } from "@/types/IMessage";
import { IUser } from "@/types/IUser";
import { usePage } from "@inertiajs/react";

export default function MessageBubble({ message }: { message: IMessage }) {

    const user: IUser = usePage().props.auth.user;
    const isMe: boolean = (message.user.id === user.id);

    return (
        <div className={`flex items-center space-x-4 my-0.5 ${isMe ? 'justify-end' : ''}`}>
            {!isMe && (
                <div className="flex-shrink-0">
                    <img
                        src={message.user.profile_photo_path}
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                    />
                </div>
            )}
            <div className={`p-2 rounded-xl ${isMe ? 'bg-green-300' : 'bg-blue-200'} max-w-lg`}>
                <p className="text-sm text-gray-700 px-2">
                    {message.message}
                </p>
            </div>
            {isMe && (
                <div className="flex-shrink-0">
                    <img
                        src={message.user.profile_photo_path}
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                    />
                </div>
            )}
        </div>
    )
}