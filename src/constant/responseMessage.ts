export default {
    SUCCESS: 'The operation is Successfully  Done',
    SOMETHING_WENT_WRONG: 'Something went wrong',
    NOT_FOUND:(entity :string)=> `${entity} Not Found`,
    TOO_MANY_REQUEST:'Too Many Request! Please try again after some time',
    INTERNAL_ERROR: 'Internal server error',
    USER_EXIST: `User already exists.`,
    USER_NOT_FOUND: 'User not found',
    USER_CREATED: 'User created successfully',
    USER_UPDATED: 'User updated successfully',
    USER_DELETED: 'User deleted successfully',
    USERS_FETCHED: 'Users fetched successfully',
    USER_NOT_ATHURIZED: 'Please Login ....',
    ACCESS_DENIED: 'Access denied. Insufficient privileges.',
    LOGIN_SUCCESS: `Login Successfully `,
    LOGIN_FAILED: `Invalid email or password`,
    LOGOUT: 'Logout Successfully',
    LOGOUT_FAILED: 'Failed to log out.'
}
