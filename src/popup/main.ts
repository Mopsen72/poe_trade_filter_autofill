
import { setupCounter } from './counter.ts'
import './style.css'

document.querySelector('#app')!.innerHTML = `
  <div>
    
    <h1>poe-trade-filter-autofill</h1>
    
  </div>
`

//@ts-ignore
setupCounter(document.querySelector('#counter')!)
