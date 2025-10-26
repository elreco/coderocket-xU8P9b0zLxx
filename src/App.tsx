import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Header } from './components/ui/header';
import './globals.css';
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <Header />
      <div className="flex flex-col items-center justify-center gap-8 p-8 pt-24">
        <h1 className="text-4xl font-bold text-white mb-8">Create workflows with AI</h1>
        <Card />
        <div className="space-y-4 mt-8">
          <h2 className="text-2xl font-bold text-white mb-4">Button Examples</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="accent">Accent Button</Button>
            <Button variant="outline">Outline Button</Button>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="default" size="sm">Small</Button>
            <Button variant="default" size="default">Default</Button>
            <Button variant="default" size="lg">Large</Button>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;