'use client';

import { Button } from '@/components/ui/Button';

export function FloatingCTA() {
  return (
    <>
      {/* Desktop floating CTA */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <Button href="/contact" variant="primary" className="shadow-lg">
          Contact Sales
        </Button>
      </div>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t p-4 z-50">
        <div className="flex space-x-4">
          <Button href="/contact" variant="primary" className="flex-1">
            Request Quote
          </Button>
          <Button href="/contact" variant="secondary" className="flex-1">
            Contact Sales
          </Button>
        </div>
      </div>
    </>
  );
}
