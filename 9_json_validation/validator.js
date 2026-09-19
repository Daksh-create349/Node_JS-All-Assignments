const validateUser = (user) => {
    return (
        typeof user.name === "string" &&
        typeof user.age === "number" &&
        user.age > 18 &&
        user.email.includes("@")
    );
};

module.exports = validateUser;