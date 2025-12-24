import room from '@/assets/room.webp';
import InfoCircle from '@/components/InfoCircle';

// Configuration for all info circles
const infoCircles = [
  {
    x: 25,
    y: 20,
    name: 'Favorites',
    info: <p>I love Formula 1 (and racing in general), hiking, watching movies, and spending time with family!</p>,
  },
  {
    x: 85,
    y: 40,
    name: 'Projects',
    info: <p>I've built cars, coded rocket trajectories, and now help everyone I know with anything around the house!</p>,
  },
  {
    x: 40,
    y: 65,
    name: 'About',
    info: <p>Hello! I'm German, originally from San Jose, CA , and now live in Denver, CO!</p>,
  },
];

const Index = () => {
  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center">
      {/* Main Section - Centered vertically */}
      <div className="flex flex-col items-center space-y-8 p-8">
        {/* Title and Info Section */}
        <div className="text-center">
          {/* Website Title */}
          <div className="space-y-2">
            <h1 className="text-6xl font-serif text-foreground tracking-wide animate-gentle-float">
              Raghbir Kern
            </h1>
          </div>

          {/* Navigation hint */}
          <div className="mt-6">
            <p className="text-muted-foreground text-sm">
              Explore the room to learn about my life!
            </p>
          </div>
        </div>

        {/* Room Scene Container */}
        <div className="relative max-w-6xl w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-cottage animate-fade-in-up">
            <img 
              src={room} 
              alt="Raghbir's Room" 
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          
            {/* Info Circles */}
            {infoCircles.map((circle) => (
              <InfoCircle
                key={circle.name}
                x={circle.x}
                y={circle.y}
                name={circle.name}
                info={circle.info}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;