export default function Banner() {
  return (
    <section className="space-y-10 pb-16">
      <div className="rounded-xl overflow-hidden">
        <div 
          data-testid="banner-home-nature-emocione" 
          className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover" 
          style={{ 
            backgroundImage: `url('/images/banner.jpg')`,  
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            width: '100%',
          }}
        >
        </div>
      </div>
    </section>
  )
}