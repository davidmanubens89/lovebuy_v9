export const headphonesQuestions = {
  budget: {
    title: "Presupuesto: elige el rango de precios que tienes en mente",
    options: [
      { id: "1", label: "Menos de 100€", value: "budget" },
      { id: "2", label: "100€ - 200€", value: "medium" },
      { id: "3", label: "Mas de 200€", value: "high" },
    ],
    helpText: "Selecciona un rango de presupuesto para mostrarte las mejores opciones disponibles."
  },
  usage: {
    title: "Uso: para que vas a utilizar los auriculares principalmente",
    layout: "horizontal",
    options: [
      { 
        id: "1", 
        label: "Casual listening",
        value: "casual" 
      },
      { 
        id: "2", 
        label: "Commuting/travel",
        value: "travel" 
      },
      { 
        id: "3", 
        label: "Office/remote work",
        value: "office" 
      },
      { 
        id: "4", 
        label: "Fitness/exercise",
        value: "fitness" 
      },
      { 
        id: "5", 
        label: "Gaming",
        value: "gaming" 
      },
      { 
        id: "6", 
        label: "Professional audio work",
        description: "e.g., music production, DJing",
        value: "professional" 
      }
    ]
  },
  type: {
    title: "¿Qué tipo de auriculares prefieres?",
    options: [
      { id: "1", label: "In-ear", description: "Compactos y portátiles", value: "in-ear" },
      { id: "2", label: "Over-ear", description: "Mayor inmersión y comodidad", value: "over-ear" },
      { id: "3", label: "On-ear", description: "Balance entre portabilidad y sonido", value: "on-ear" }
    ],
    helpText: "Cada tipo tiene sus ventajas. Los in-ear son más portátiles, los over-ear ofrecen mejor calidad de sonido, y los on-ear son un punto intermedio."
  },
  soundQuality: {
    title: "¿Qué aspecto del sonido valoras más?",
    options: [
      { id: "1", label: "Graves potentes", description: "Ideal para música electrónica y hip-hop", value: "bass" },
      { id: "2", label: "Sonido balanceado", description: "Para todo tipo de música", value: "balanced" },
      { id: "3", label: "Claridad vocal", description: "Perfecto para podcast y llamadas", value: "vocal" },
      { id: "4", label: "Alta fidelidad", description: "Máxima calidad de audio", value: "hifi" }
    ]
  }
};

export type HeadphoneAnswers = {
  budget: string;
  usage: string;
  type: string;
  soundQuality: string;
}; 