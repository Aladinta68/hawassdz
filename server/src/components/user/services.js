export const getByid = async ({ id }) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  } catch (error) {
    throwCustomError(
      "Something went wrong, Try again",
      ErrorTypes.INTERNAL_SERVER_ERROR
    );
  }
};
