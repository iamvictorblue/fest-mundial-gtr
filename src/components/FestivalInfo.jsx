const FestivalInfo = () => {
  return (
    <div id="festival" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Festival Mundial de la Guitarra
      </h2>
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold mb-4">Conciertos</h3>
          <p className="text-gray-600">
            Experience breathtaking performances by world-renowned guitarists across various genres.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-4">Simposios</h3>
          <p className="text-gray-600">
            Attend enlightening symposiums led by guitar experts, covering topics from technique to music history.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-4">World Guitar Competition</h3>
          <p className="text-gray-600">
            Witness the fierce competition as talented guitarists from around the world compete for top honors.
          </p>
        </section>
        <section>
          <h3 className="text-2xl font-semibold mb-4">Concierto de Cierre</h3>
          <p className="text-gray-600">
            Join us for the grand finale featuring Yamandu Costa, with the announcement of competition winners during the intermission.
          </p>
        </section>
      </div>
    </div>
  );
};

export default FestivalInfo;
