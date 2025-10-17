import Navigation from "@/components/Navigation";

const Schedule = () => {
  const games = [
    {
      week: 1,
      date: "Sun, Sep 7, 2025",
      opponent: "Miami Dolphins",
      venue: "Home",
      time: "12:00 PM CT",
      result: "W 33–8",
    },
    {
      week: 2,
      date: "Sun, Sep 14, 2025",
      opponent: "Denver Broncos",
      venue: "Home",
      time: "3:05 PM CT",
      result: "W 29–28",
    },
    {
      week: 3,
      date: "Sun, Sep 21, 2025",
      opponent: "@ Tennessee Titans",
      venue: "Away",
      time: "12:00 PM CT",
      result: "W 41–20",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">Schedule</h1>
            <p className="text-xl text-muted-foreground">September 7–21, 2025</p>
          </div>

          {/* Season Record */}
          <div className="bg-card rounded-lg p-6 border border-border mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Current Record</h2>
                <p className="text-muted-foreground mt-1">2025 Season</p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold text-secondary">3-0</div>
                <div className="text-sm text-muted-foreground mt-1">Wins-Losses</div>
              </div>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Week</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Opponent</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Venue</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Time</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {games.map((game, index) => (
                    <tr key={index} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 text-foreground font-medium">{game.week}</td>
                      <td className="px-6 py-4 text-foreground">{game.date}</td>
                      <td className="px-6 py-4 text-foreground font-medium">{game.opponent}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            game.venue === "Home"
                              ? "bg-secondary/20 text-secondary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {game.venue}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{game.time}</td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-secondary">{game.result}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Upcoming Games Notice */}
          <div className="mt-8 bg-secondary/10 rounded-lg p-6 border border-secondary/30">
            <h3 className="text-xl font-bold text-foreground mb-2">Upcoming Games</h3>
            <p className="text-muted-foreground">
              Stay tuned for more games to be added to the schedule as the season progresses.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Schedule;
