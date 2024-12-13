export const buyingGuideExplanations = {
    headphoneType: {
      title: "Tipo de Auricular",
      icon: "🎧",
      explanation: "El tipo de auricular que elijas dependerá de tu uso principal y preferencias de comodidad.",
      importance: "Cada tipo de auricular tiene sus ventajas específicas según el caso de uso:",
      types: [
        {
          name: "Over-Ear",
          description: "Cubren completamente la oreja. Ideales para uso prolongado y mejor calidad de sonido.",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80",
          bestFor: "Audiófilos, uso en casa, gaming"
        },
        {
          name: "On-Ear",
          description: "Se apoyan sobre la oreja. Balance entre portabilidad y calidad.",
          image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&q=80",
          bestFor: "Uso diario, commuting"
        },
        {
          name: "In-Ear",
          description: "Se introducen en el canal auditivo. Máxima portabilidad.",
          image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&q=80",
          bestFor: "Deportes, viajes, uso casual"
        }
      ]
    },
    soundQuality: {
      title: "Calidad del sonido",
      icon: "🎵",
      explanation: "La calidad del sonido es el resultado de varios factores técnicos que determinan cómo escucharás tu música.",
      importance: "Entender estos elementos te ayudará a elegir los auriculares que mejor se adapten a tus preferencias musicales.",
      detailedExplanation: {
        mainFactors: [
          {
            title: "Drivers (Controladores)",
            description: "Son los altavoces en miniatura dentro de los auriculares.",
            image: "https://images.unsplash.com/photo-1610041321420-a596dd14ebc9?w=300&q=80",
            priceRanges: {
              economic: "Drivers básicos de 20-40mm",
              medium: "Drivers de calidad media de 40-50mm",
              premium: "Drivers premium >50mm o tecnologías avanzadas como planar magnetic"
            }
          },
          {
            title: "Respuesta en Frecuencia",
            description: "El rango de frecuencias que pueden reproducir los auriculares.",
            image: "https://images.unsplash.com/photo-1615630799526-77e3f6533690?w=300&q=80",
            priceRanges: {
              economic: "20Hz - 20kHz (rango básico)",
              medium: "5Hz - 40kHz (mayor rango)",
              premium: "4Hz - 50kHz+ (rango extendido con mayor precisión)"
            }
          },
          {
            title: "Balance Tonal",
            description: "La forma en que se reproducen los diferentes rangos de frecuencia.",
            image: "https://images.unsplash.com/photo-1519874179391-3ebc752241dd?w=300&q=80",
            characteristics: {
              bass: "Graves: dan profundidad y potencia a la música",
              mids: "Medios: donde está la mayoría de voces e instrumentos",
              treble: "Agudos: aportan claridad y detalle"
            },
            priceRanges: {
              economic: "Tendencia a enfatizar graves, posible distorsión",
              medium: "Balance más natural, mejor definición",
              premium: "Balance preciso, alta fidelidad y claridad"
            }
          }
        ],
        recommendations: [
          {
            useCase: "Música clásica/Jazz",
            preference: "Balance neutral con buenos medios y agudos",
            suggestion: "Busca auriculares con respuesta plana"
          },
          {
            useCase: "EDM/Hip-Hop",
            preference: "Buenos graves y sub-graves",
            suggestion: "Considera modelos con refuerzo de graves"
          },
          {
            useCase: "Rock/Metal",
            preference: "Buenos medios y dinámica",
            suggestion: "Prioriza la claridad en medios y la separación instrumental"
          }
        ]
      }
    },
    microphoneQuality: {
      title: "Calidad del micrófono",
      icon: "🎙️",
      explanation: "Un buen micrófono es esencial para llamadas claras y comunicación efectiva.",
      importance: "La calidad del micrófono afecta directamente a cómo te escuchan los demás en llamadas, videollamadas y gaming.",
      detailedExplanation: {
        mainFactors: [
          {
            title: "Tecnología de Captación",
            description: "El sistema que usa el micrófono para captar tu voz.",
            image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&q=80",
            priceRanges: {
              economic: "Micrófono único básico",
              medium: "Sistema dual de micrófonos",
              premium: "Array de múltiples micrófonos con IA"
            }
          },
          {
            title: "Cancelación de Ruido",
            description: "Capacidad para filtrar ruidos ambientales durante las llamadas.",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&q=80",
            priceRanges: {
              economic: "Filtrado básico de ruido",
              medium: "Cancelación activa de ruido ambiental",
              premium: "Cancelación adaptativa con IA y filtrado avanzado"
            }
          },
          {
            title: "Claridad de Voz",
            description: "Calidad y nitidez en la transmisión de la voz.",
            image: "https://images.unsplash.com/photo-1590935217281-8f102120d683?w=300&q=80",
            characteristics: {
              clarity: "Nitidez y definición de la voz",
              processing: "Procesamiento de señal",
              range: "Rango de captación"
            },
            priceRanges: {
              economic: "Calidad básica para llamadas casuales",
              medium: "Buena claridad para videollamadas profesionales",
              premium: "Calidad cercana a micrófonos profesionales"
            }
          }
        ],
        recommendations: [
          {
            useCase: "Llamadas casuales",
            preference: "Claridad básica y filtrado de ruido simple",
            suggestion: "Modelos económicos con micrófono integrado"
          },
          {
            useCase: "Trabajo remoto",
            preference: "Buena cancelación de ruido y claridad",
            suggestion: "Modelos de gama media con micrófonos duales"
          },
          {
            useCase: "Gaming/Streaming",
            preference: "Máxima claridad y cancelación de ruido",
            suggestion: "Modelos premium con tecnología avanzada"
          }
        ]
      }
    },
    hoursOfUse: {
      title: "Batería",
      icon: "🔋",
      explanation: "La duración de la batería determina la autonomía de tus auriculares.",
      importance: "Una buena batería garantiza uso prolongado sin interrupciones frecuentes.",
      detailedExplanation: {
        mainFactors: [
          {
            title: "Duración",
            description: "Tiempo de uso continuo con una carga completa.",
            image: "https://images.unsplash.com/photo-1600490722773-35753aea6332?w=300&q=80",
            priceRanges: {
              economic: "10-15 horas de uso",
              medium: "20-30 horas de uso",
              premium: "30-50+ horas de uso"
            }
          },
          {
            title: "Carga",
            description: "Velocidad y opciones de carga disponibles.",
            image: "https://images.unsplash.com/photo-1603539947678-cd3954ed515d?w=300&q=80",
            characteristics: {
              speed: "Velocidad de carga",
              wireless: "Carga inalámbrica",
              quickCharge: "Carga rápida"
            },
            priceRanges: {
              economic: "Carga estándar USB, 2-3 horas",
              medium: "Carga rápida, 1-2 horas",
              premium: "Carga rápida + inalámbrica, 30min-1hora"
            }
          },
          {
            title: "Gestión de Energía",
            description: "Funciones de ahorro y optimización de batería.",
            image: "https://images.unsplash.com/photo-1633177031940-61beb547f15e?w=300&q=80",
            priceRanges: {
              economic: "Gestión básica de energía",
              medium: "Modos de ahorro de energía",
              premium: "Gestión adaptativa y optimización IA"
            }
          }
        ],
        recommendations: [
          {
            useCase: "Uso diario casual",
            preference: "10-15 horas es suficiente",
            suggestion: "Modelos económicos con carga estándar"
          },
          {
            useCase: "Viajes y trabajo",
            preference: "20-30 horas con carga rápida",
            suggestion: "Modelos de gama media con buena autonomía"
          },
          {
            useCase: "Uso intensivo",
            preference: "30+ horas con todas las opciones de carga",
            suggestion: "Modelos premium con máxima autonomía"
          }
        ]
      }
    },
    noiseCancellation: {
      title: "Cancelación de ruido",
      icon: "🔇",
      explanation: "La cancelación de ruido te permite aislarte del entorno y concentrarte en tu audio sin distracciones.",
      importance: "Es especialmente útil en ambientes ruidosos como transportes públicos, oficinas abiertas o durante viajes, mejorando significativamente la experiencia de escucha."
    },
    features: {
      title: "Funcionalidades especiales",
      icon: "⚙️",
      explanation: "Las funciones adicionales amplían las posibilidades de uso y mejoran la experiencia general con los auriculares.",
      importance: "Características como el audio espacial, conexión multipunto o personalización del sonido pueden marcar la diferencia en el uso diario y adaptarse mejor a tus necesidades específicas."
    }
  }; 