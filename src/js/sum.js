export default function sum(...args) {
  return args.reduce((pres, next) => pres + next, 0)
}