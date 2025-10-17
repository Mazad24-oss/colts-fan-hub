import Navigation from "@/components/Navigation";

const Stadium = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-foreground mb-4">Lucas Oil Stadium</h1>
            <p className="text-xl text-muted-foreground">Home of the Indianapolis Colts</p>
          </div>

          {/* Stadium Image Placeholder */}
          <div className="bg-gradient-to-br from-primary to-secondary rounded-lg h-96 mb-8 flex items-center justify-center">
            <p className="text-2xl text-primary-foreground font-semibold">Lucas Oil Stadium</p>
          </div>

          {/* Stadium Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Stadium Details</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-muted-foreground">Location</dt>
                  <dd className="text-foreground font-medium">500 S Capitol Ave, Indianapolis, IN 46225</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Capacity</dt>
                  <dd className="text-foreground font-medium">67,000</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Opened</dt>
                  <dd className="text-foreground font-medium">August 16, 2008</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Surface</dt>
                  <dd className="text-foreground font-medium">FieldTurf</dd>
                </div>
              </dl>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Retractable roof for all-weather play</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>State-of-the-art video boards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Climate-controlled environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Premium seating and suites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Host of Super Bowl XLVI and other major events</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-card p-8 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">About Lucas Oil Stadium</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lucas Oil Stadium is a multi-purpose stadium in downtown Indianapolis, Indiana, United States. 
              It replaced the RCA Dome as the home field of the NFL's Indianapolis Colts and opened on August 16, 2008.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The stadium was constructed to allow the removal of the RCA Dome and expansion of the Indiana Convention Center 
              on its site. The stadium's naming rights belong to the Lucas Oil corporation.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stadium;
