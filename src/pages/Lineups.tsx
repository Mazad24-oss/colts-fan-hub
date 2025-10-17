import Navigation from "@/components/Navigation";

const Lineups = () => {
  const offense = [
    { position: "QB", name: "Starting Quarterback" },
    { position: "RB", name: "Running Back #1" },
    { position: "WR", name: "Wide Receiver #1" },
    { position: "WR", name: "Wide Receiver #2" },
    { position: "TE", name: "Tight End" },
    { position: "LT", name: "Left Tackle" },
    { position: "LG", name: "Left Guard" },
    { position: "C", name: "Center" },
    { position: "RG", name: "Right Guard" },
    { position: "RT", name: "Right Tackle" },
  ];

  const defense = [
    { position: "DE", name: "Defensive End #1" },
    { position: "DT", name: "Defensive Tackle #1" },
    { position: "DT", name: "Defensive Tackle #2" },
    { position: "DE", name: "Defensive End #2" },
    { position: "LB", name: "Linebacker #1" },
    { position: "LB", name: "Linebacker #2" },
    { position: "LB", name: "Linebacker #3" },
    { position: "CB", name: "Cornerback #1" },
    { position: "CB", name: "Cornerback #2" },
    { position: "S", name: "Safety #1" },
    { position: "S", name: "Safety #2" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Header */}
          <div className="mb-8 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-4">Starting Lineups</h1>
            <p className="text-xl text-muted-foreground">2025 Season Roster</p>
          </div>

          {/* Lineups Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Offense */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b-2 border-secondary">
                Offense
              </h2>
              <div className="space-y-3">
                {offense.map((player, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-bold text-secondary text-lg">{player.position}</span>
                    <span className="text-foreground font-medium">{player.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Defense */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b-2 border-secondary">
                Defense
              </h2>
              <div className="space-y-3">
                {defense.map((player, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-md bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-bold text-secondary text-lg">{player.position}</span>
                    <span className="text-foreground font-medium">{player.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Special Teams */}
          <div className="mt-8 bg-card rounded-lg p-6 border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-6 pb-3 border-b-2 border-secondary">
              Special Teams
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-md bg-muted/30">
                <div className="font-bold text-secondary text-lg mb-1">K</div>
                <div className="text-foreground font-medium">Michael Badgley</div>
              </div>
              <div className="p-4 rounded-md bg-muted/30">
                <div className="font-bold text-secondary text-lg mb-1">P</div>
                <div className="text-foreground font-medium">Punter</div>
              </div>
              <div className="p-4 rounded-md bg-muted/30">
                <div className="font-bold text-secondary text-lg mb-1">LS</div>
                <div className="text-foreground font-medium">Long Snapper</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Lineups;
