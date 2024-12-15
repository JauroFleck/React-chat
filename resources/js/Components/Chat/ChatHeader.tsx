import { IUser } from "@/types/IUser";

export default function ChatHeader({ user }: { user: IUser }) {
    return (
        <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
            <div className="flex items-center space-x-4">
                <img
                    src={user.profile_photo_path}
                    alt="Profile"
                    className="w-12 h-12 rounded-full"
                />
                <div>
                    <h2 className="text-lg font-semibold">{user.name}</h2>
                    <p className="text-sm text-gray-500">Active now</p>
                </div>
            </div>
            <div>
                <button className="p-2 text-gray-500 rounded-full hover:bg-gray-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}