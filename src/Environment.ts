export default class Environment {
  static isClient(): boolean {
    return typeof window !== 'undefined';
  }

  static isDevelopment(env: string): boolean {
    return env === 'development' || env === 'dev' || env === 'develop';
  }

  static isProduction(env: string): boolean {
    return env === 'production' || env === 'prod';
  }
}
