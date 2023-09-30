const UserProfile = ({ params }: any) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-semibold mt-3 mb-8">
                User Profile
            </h1>

            <p className="text-2xl">
                Profile: {params.id.toUpperCase()}
            </p>
        </div>
    )
};

export default UserProfile;