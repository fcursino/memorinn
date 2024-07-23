import { createAction } from '@reduxjs/toolkit';
import { User } from './state';

export const login = createAction<User>('auth/login');
export const logout = createAction<User>('auth/logout');
