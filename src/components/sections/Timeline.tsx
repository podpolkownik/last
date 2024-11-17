import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Activity, Heart, CheckCircle2 } from 'lucide-react';

export const Timeline = () => {
  const events = [
    {
      icon: Activity,
      title: "Первые симптомы",
      date: "6 месяцев назад",
      description: "Появление первых признаков дискомфорта",
      color: "text-amber-500",
      bgColor: "bg-amber-50",
    },
    {
      icon: AlertCircle,
      title: "Ухудшение",
      date: "4 месяца назад",
      description: "Симптомы начали серьезно влиять на качество жизни",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Heart,
      title: "Обращение к врачу",
      date: "3 месяца назад",
      description: "Начало профессионального лечения",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: CheckCircle2,
      title: "Выздоровление",
      date: "Сегодня",
      description: "Возвращение к полноценной жизни",
      color: "text-green-500",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Моя история</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Путь от первых симптомов до полного выздоровления
          </p>
        </motion.div>

        <div className="relative">
          {/* Вертикальная линия для десктопной версии */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
          
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-12 w-full md:w-1/2 mx-auto px-4"
            >
              <div className={`flex items-center gap-6 p-6 rounded-xl shadow-lg ${event.bgColor}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${event.color}`}>
                  <event.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">{event.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-700">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
