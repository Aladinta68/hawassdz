import * as yup from 'yup'

import { createOne, findByEmail, resetPassword, verifyCodePin, updateForgetPassword } from './service.js'
import { signAccessToken } from './utils.js'
import { throwCustomError, ErrorTypes } from '../../utils/error/ErrorHandler.js'
import { loginSchema, registerSchema, updateForgetPasswordSchema, verifyCodePinSchema, forgetPasswordSchema } from './validations.js'

export const authResolver = {
    Mutation: {
        login: async (_, { input }, { prisma }) => {
            try {
                await loginSchema.validate(input, { abortEarly: false })
                const user = await findByEmail({input,prisma})

                const accessToken = await signAccessToken({ id: user.id })
                const authOutput = {
                    accessToken,
                }
                return authOutput
            } catch (error) {
                if (error instanceof yup.ValidationError) {
                    const errors= {};
                    error.inner.reverse().forEach((error) => {
                        const field = error.path
                        const message = error.message
                        if (!errors[field ]) {
                            errors[field ] = message
                        }
                    })
                    throwCustomError('Bad User Input', ErrorTypes.BAD_USER_INPUT, errors)
                }
                throwCustomError(error.message, error.type)
            }
        },
        register: async (_, { input }, { prisma }) => {
            try {
                await registerSchema.validate(input, { abortEarly: false })
                const user = await createOne({input,prisma})

                const accessToken = await signAccessToken({ id: user.id })
                const authOutput = {
                    accessToken,
                }
                return authOutput
            } catch (error) {
                if (error instanceof yup.ValidationError) {
                    const errors = {};
                    error.inner.reverse().forEach((error) => {
                        const field = error.path
                        const message = error.message
                        if (!errors[field ]) {
                            errors[field ] = message
                        }
                    })
                    throwCustomError('Bad User Input', ErrorTypes.BAD_USER_INPUT, errors)
                }
                throwCustomError(error.message, error.type || ErrorTypes.INTERNAL_SERVER_ERROR);
            }
        },
        forgetPassword: async (_, { input },{prisma}) => {
            try {
                await forgetPasswordSchema.validate(input, { abortEarly: false })
                const result = await resetPassword({input,prisma})
                return result
            } catch (error) {
                if (error instanceof yup.ValidationError) {
                    const errors = {};
                    error.inner.reverse().forEach((error) => {
                        const field = error.path
                        const message = error.message
                        if (!errors[field ]) {
                            errors[field ] = message
                        }
                    })
                    throwCustomError('Bad User Input', ErrorTypes.BAD_USER_INPUT, errors)
                }
                throw error
            }
        },
        verifyCodePin: async (_, { input },{prisma}) => {
            try {
                await verifyCodePinSchema.validate(input, { abortEarly: false })
                const check = await verifyCodePin({input,prisma})
                return check
            } catch (error) {
                if (error instanceof yup.ValidationError) {
                    const errors = {};
                    error.inner.reverse().forEach((error) => {
                        const field = error.path
                        const message = error.message
                        if (!errors[field ]) {
                            errors[field ] = message
                        }
                    })
                    throwCustomError('Bad User Input', ErrorTypes.BAD_USER_INPUT, errors)
                }
                throw error
            }
        },
        updateForgetPassword: async (_, { input },{prisma})=> {
            try {
                await updateForgetPasswordSchema.validate(input, { abortEarly: false })
                const result = await updateForgetPassword({input,prisma});
                return result;
            } catch (error) {
                if (error instanceof yup.ValidationError) {
                    const errors= {};
                    error.inner.reverse().forEach((error) => {
                        const field = error.path
                        const message = error.message
                        if (!errors[field ]) {
                            errors[field ] = message
                        }
                    })
                    throwCustomError('Bad User Input', ErrorTypes.BAD_USER_INPUT, errors)
                }
                throw error
            }
        }
    }
}
export default authResolver;
