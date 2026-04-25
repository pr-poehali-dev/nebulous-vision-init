import SplineScene from "@/components/SplineScene"
import Header from "@/components/Header"
import RotatingTextAccent from "@/components/RotatingTextAccent"
import Footer from "@/components/Footer"
import HeroTextOverlay from "@/components/HeroTextOverlay"
import Icon from "@/components/ui/icon"

const Index = () => {
  const schoolVideos = [
    {
      num: "01",
      title: "Что такое дипфейк?",
      desc: "Простое объяснение термина, где встречаются дипфейки и чем они отличаются от обычного монтажа.",
    },
    {
      num: "02",
      title: "Как распознать подделку?",
      desc: "Неестественная мимика, движение губ, странные тени, ошибки в голосе и артефакты изображения.",
    },
    {
      num: "03",
      title: "Проверяем контент перед репостом",
      desc: "Алгоритм проверки: источник, дата, автор, поиск оригинала и сравнение с другими публикациями.",
    },
  ]

  const seniorVideos = [
    {
      num: "04",
      title: "Почему дипфейки опасны?",
      desc: "Примеры мошенничества, поддельных обращений, фейковых новостей и манипуляции доверием.",
    },
    {
      num: "05",
      title: "Как не попасться на обман?",
      desc: "Пошаговые советы: не доверять срочным просьбам, перепроверять информацию, звонить по известному номеру.",
    },
    {
      num: "06",
      title: "Практикум: реальное или дипфейк?",
      desc: "Разбор 2–3 коротких примеров, совместный поиск признаков подделки и итоговая памятка.",
    },
  ]

  return (
    <div className="w-full min-h-screen py-0 bg-background">
      <div className="max-w-[1200px] mx-auto">
        <main className="w-full relative h-[600px]">
          <Header />
          <SplineScene />
          <HeroTextOverlay />
          <RotatingTextAccent />
        </main>

        <section
          className="relative rounded-4xl py-10 mx-4 md:mx-0 w-[calc(100%-2rem)] md:w-full bg-card border border-solid border-border pb-20"
          style={{
            backgroundImage: `
              linear-gradient(var(--border) 1px, transparent 1px),
              linear-gradient(90deg, var(--border) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        >
          <div className="absolute top-8 left-8 text-foreground opacity-50 text-5xl font-extralight font-sans leading-[0rem]">+</div>
          <div className="absolute top-8 right-8 text-foreground opacity-50 text-5xl font-sans leading-[0] font-extralight">+</div>
          <div className="absolute bottom-8 left-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>
          <div className="absolute bottom-8 right-8 text-foreground opacity-50 text-5xl font-sans font-extralight">+</div>

          <div className="px-6 md:px-16 lg:px-24">
            <div className="text-center mb-12">
              <span className="text-accent font-mono text-xs tracking-widest uppercase">Мини-курс · 6 видео · 5–7 мин каждое</span>
              <h2 className="text-foreground text-3xl md:text-4xl font-bold mt-3 mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                Программа курса
              </h2>
              <p className="text-muted-foreground font-mono text-sm max-w-xl mx-auto">
                Курс построен по принципу «от простого к сложному» и охватывает две аудитории — школьников и старшее поколение.
              </p>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="GraduationCap" size={20} className="text-accent" />
                <span className="text-accent font-mono text-sm tracking-widest uppercase">Для школьников</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {schoolVideos.map((v) => (
                  <div key={v.num} className="border border-border rounded-2xl p-6 bg-background/50 hover:border-accent transition-colors">
                    <span className="text-accent font-mono text-xs">{v.num}</span>
                    <h3 className="text-foreground font-semibold text-base mt-2 mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-mono leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Users" size={20} className="text-accent" />
                <span className="text-accent font-mono text-sm tracking-widest uppercase">Для старшего поколения</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {seniorVideos.map((v) => (
                  <div key={v.num} className="border border-border rounded-2xl p-6 bg-background/50 hover:border-accent transition-colors">
                    <span className="text-accent font-mono text-xs">{v.num}</span>
                    <h3 className="text-foreground font-semibold text-base mt-2 mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-mono leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-border pt-10">
              <div className="flex flex-col items-center text-center gap-2">
                <Icon name="Eye" size={28} className="text-accent" />
                <p className="text-foreground font-semibold text-sm">Замечай признаки</p>
                <p className="text-muted-foreground text-xs font-mono">Мимика, голос, артефакты — учись видеть подделку</p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Icon name="ShieldCheck" size={28} className="text-accent" />
                <p className="text-foreground font-semibold text-sm">Проверяй источник</p>
                <p className="text-muted-foreground text-xs font-mono">Алгоритм проверки любого контента перед репостом</p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Icon name="BookOpen" size={28} className="text-accent" />
                <p className="text-foreground font-semibold text-sm">Получи чек-лист</p>
                <p className="text-muted-foreground text-xs font-mono">Итоговая памятка для безопасного поведения в сети</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Index
