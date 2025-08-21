export default function IntroScreen({ onNext }) {
  return (
    <div className="text-center max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">🌈 Welcome to Sentiment Town! 🎉</h1>
      <p className="text-lg mb-4">
        Meet our cheerful friends: 
      </p>
      <div className="flex justify-center gap-8 text-6xl mb-6">
        <span>😊</span>
        <span>😢</span>
        <span>😐</span>
      </div>


      <p className="mb-6">
        Sentiment Town is a magical place where emotions come to life! 🌟  
        <br/>
        Meet our friends: Harry 😊, Sally 😢, and Nicky 😐  
 <br/>

  <br/> 
  
👍 Tip:  
- Positive 😊 → Happy, exciting, or fun things   <br/>
- Negative 😢 → Sad, upset, or scary things   <br/>
- Neutral 😐 → Calm or ordinary things   <br/>
      </p>

      <p className=" mb-6">
  🎯Along the way, you'll meet fun challenges, solve puzzles, and become a Sentiment Hero! 🦸‍♂️🦸‍♀️
</p>
      <button
        onClick={onNext}
        className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-xl shadow-lg hover:scale-105 transition"
      >
        Start Adventure 🚀
      </button>
    </div>
  );
}
