'use client'
import { Button } from '../components/ui/Button'
import '../../../globals.css'
import { Input } from '../components/ui/Input'
function logMessage(): void {
  console.log('message')
}
const page = () => {
  return (
    <div>
      <h1>Test</h1>
      <Button label="bouton" onClick={logMessage} disabled />
      <form action="">
        <Input label="Nom" placeholder="Jane Smith" onChange={logMessage} type="text" />
      </form>
    </div>
  )
}

export default page
