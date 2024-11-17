import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Crypto = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const sections = document.querySelectorAll('.section');
    sections.forEach((section: any) => {
      if (scrollPosition + window.innerHeight >= section.offsetTop) {
        section.classList.add('in-view');
      } else {
        section.classList.remove('in-view');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <article className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        <motion.header 
          className="space-y-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-semibold text-gray-800 leading-tight tracking-normal text-left">
            Секрет, Который Помог Мне Забыть о Геморрое Раз и Навсегда!
          </h1>
        </motion.header>

        <motion.div 
          className="relative h-64 rounded-xl overflow-hidden shadow-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://sun107-1.userapi.com/impg/ZInRa0L1nI9bfhbB_WbAsB4PiQgjd6r0P4TbqA/kMfOzJS2ImI.jpg?size=1280x853&quality=96&sign=8910813201f38c86a69a6dee120a2215&type=album"
            alt="Treatment Journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        {/* Начало проблемы */}
        <motion.section 
          className="bg-gray-100 rounded-xl p-6 shadow-lg section"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-left">Начало проблемы</h2>
          <p className="text-gray-700 leading-relaxed text-left">
            Всё началось неожиданно: сначала лёгкий дискомфорт перерос в постоянную боль, которая стала влиять на каждый аспект моей жизни. Простые действия превратились в настоящее испытание. Я пыталась игнорировать боль, надеясь, что она уйдёт сама, но с каждым днём становилось всё сложнее. Я начала избегать общественных мероприятий, чувствуя себя некомфортно. Все попытки найти решение приводили к неудачам. Я даже не могла нормально сидеть на длительных поездках или работать за компьютером без боли. Это стало для меня настоящей проблемой.
          </p>
        </motion.section>

        {/* Борьба с проблемой */}
        <motion.section 
          className="bg-blue-50 rounded-xl p-6 shadow-lg section"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-700 text-left">Борьба с проблемой</h2>
          <p className="text-gray-700 leading-relaxed text-left">
            Я перепробовала множество средств: мази, таблетки, народные методы. Ничего не помогало надолго, пока врач не порекомендовал Vitacaps. Сначала я сомневалась, но решила рискнуть. Врач сказал, что это безопасное средство, которое помогает при хронической боли, и что его принимают как для облегчения симптомов, так и для устранения причин проблемы. Я начала принимать капсулы, и через несколько дней заметила небольшие улучшения. Но я не сразу поверила, что это решение моих проблем. Однако продолжала использовать продукт, потому что чувствовала, что что-то в организме начинает меняться. Это был шанс, который я не могла упустить.
          </p>
        </motion.section>

        {/* Результат */}
        <motion.section 
          className="bg-green-50 rounded-xl p-6 shadow-lg section"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700 text-left">Результат</h2>
          <p className="text-gray-700 leading-relaxed text-left">
            Через неделю приёма Vitacaps боль начала отступать. Спустя две недели я вернулась к нормальной жизни: снова могла заниматься спортом, встречаться с друзьями и просто наслаждаться каждым днём. Я удивилась, как быстро начали происходить изменения в моем теле. Проблемы, с которыми я боролась годами, казались теперь далеко позади. Я почувствовала себя обновлённой. Моя жизнь вернулась в нормальное русло, и я снова стала уверенной в себе. В этот момент я поняла, как важен был этот шаг, и как он изменил моё восприятие жизни.
          </p>
        </motion.section>

        {/* Как Vitacaps помогает при геморрое */}
        <motion.section 
          className="bg-indigo-50 rounded-xl p-6 shadow-lg section"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700 text-left">Как Vitacaps помогает при геморрое</h2>
          <p className="text-gray-700 leading-relaxed text-left">
            Vitacaps - это капсулы, которые были разработаны специально для людей, страдающих от хронической боли, связанной с геморроем. В их составе натуральные компоненты, которые помогают улучшить циркуляцию крови, уменьшить воспаление и снять болевой синдром. Применение этого средства не вызывает побочных эффектов, что делает его идеальным для длительного использования. Это не просто временное облегчение, а реальное улучшение состояния.
          </p>
        </motion.section>

      </article>
    </div>
  );
};

export default Crypto;