import Navigation from "@/components/Navigation";

const News = () => {
  const newsItems = [
    {
      date: "Oct 8, 2025",
      title: "LB Germaine Pratt signs with Colts",
      description: "Reunites with DC Lou Anarumo after impressive stint with the Raiders",
    },
    {
      date: "Oct 7, 2025",
      title: "Colts sign K Michael Badgley",
      description: "Replaces injured Spencer Shrader for his third stint with the team",
    },
    {
      date: "Oct 7, 2025",
      title: "Spencer Shrader placed on injured reserve",
      description: "Suffers season-ending knee injury (ACL & MCL)",
    },
    {
      date: "Oct 7, 2025",
      title: "Joe Bachie placed on injured reserve",
      description: "Makes room on roster for Germaine Pratt signing",
    },
    {
      date: "Oct 6, 2025",
      title: "Germaine Pratt released by Raiders",
      description: "Had registered 25 tackles in four starts before release",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">News</h1>
            <p className="text-xl text-muted-foreground">Latest updates from Colts Nation</p>
          </div>

          {/* Featured Story */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 mb-8 text-primary-foreground">
            <div className="text-sm font-medium mb-2 opacity-90">FEATURED</div>
            <h2 className="text-3xl font-bold mb-4">Daniel Jones? No, INDIANA JONES!</h2>
            <p className="text-lg opacity-90">
              The Colts are making waves with historic performances and bold roster moves.
            </p>
          </div>

          {/* Recent Headlines */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-6">Recent Headlines</h2>
            <div className="space-y-4">
              {newsItems.map((item, index) => (
                <article
                  key={index}
                  className="bg-card p-6 rounded-lg border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <time className="text-sm text-muted-foreground">{item.date}</time>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Key Updates */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Key Roster Updates</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-secondary mr-2 mt-1">•</span>
                <span className="text-muted-foreground">
                  Germaine Pratt brings veteran experience to linebacker corps
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 mt-1">•</span>
                <span className="text-muted-foreground">
                  Michael Badgley returns as reliable kicking option
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 mt-1">•</span>
                <span className="text-muted-foreground">
                  Team maintains strong chemistry despite roster adjustments
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2 mt-1">•</span>
                <span className="text-muted-foreground">
                  Defensive coordinator reunion promises enhanced schemes
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default News;
