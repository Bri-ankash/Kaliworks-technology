const BANNED = [
  'fuck','shit','ass','bitch','bastard','damn','crap','piss',
  'dick','cock','pussy','nigger','nigga','whore','slut','cunt',
  'motherfucker','faggot','retard','idiot','stupid','fool',
  'malaya','meffi','umbwa','pumbavu','mnafiki','mshenzi'
]

export function containsVulgar(text) {
  const lower = text.toLowerCase()
  return BANNED.some(word => lower.includes(word))
}
