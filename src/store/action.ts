const Action = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
} as const;

export const action = {
  login: () => ({
    type: Action.LOGIN,
  }),
  logout: () => ({
    type: Action.LOGOUT,
  }),
};

export type ActionType = {
  type: keyof typeof Action;
};
