import * as dotenv from 'dotenv'

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: __dirname + '/../../.env' })
} else {
  dotenv.config({ path: __dirname + '/../../.env.development' })
}
