const Action = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
} as const;

export const creator = {
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
