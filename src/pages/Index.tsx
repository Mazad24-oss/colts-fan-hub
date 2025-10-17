import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-b from-[hsl(210,100%,12%)] to-[hsl(210,100%,19%)] flex items-center justify-center">
        <div className="text-center space-y-6 px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
            INDIANAPOLIS COLTS
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Welcome to Colts Nation
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Latest Updates */}
          <div className="bg-card rounded-lg p-8 shadow-md border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Updates</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Stay up to date with the latest news, schedules, and team information.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">Recent Highlights</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Colts start season strong with 3-0 record</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Dominant performances from defense and offense</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>Key roster updates and player news</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-card rounded-lg p-8 shadow-md border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-4">Season Stats</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-secondary pl-4">
                <div className="text-4xl font-bold text-foreground">3-0</div>
                <div className="text-sm text-muted-foreground">Record</div>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <div className="text-4xl font-bold text-foreground">103</div>
                <div className="text-sm text-muted-foreground">Total Points Scored</div>
              </div>
              <div className="border-l-4 border-secondary pl-4">
                <div className="text-4xl font-bold text-foreground">56</div>
                <div className="text-sm text-muted-foreground">Total Points Allowed</div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Index;
