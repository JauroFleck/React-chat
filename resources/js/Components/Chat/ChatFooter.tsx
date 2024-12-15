import { IUser } from "@/types/IUser";
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

export default function ChatFooter({ user }: { user: IUser }) {

    const [message, setMessage] = useState<string>('');

    const sendMessage = () => {
        if (message.trim() === '') {
            return;
        }
        
        axios.post(`/send-message/${user.id}`, { message: message })
            .then((response) => {
                setMessage('');
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    }

    return (
        <div className="p-4 bg-gray-100">
            <div className="flex items-center space-x-4">
                <TextField
                    variant='standard'
                    placeholder="Type a message"
                    fullWidth
                    value={message}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={sendMessage}>
                    Send
                </Button>
            </div>
        </div>
    );
}