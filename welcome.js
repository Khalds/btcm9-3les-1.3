import os from 'os'

export default function welcomeUser() {
  return `Привет, юзер. Вижу ты зашел с ${os.type()}`
}