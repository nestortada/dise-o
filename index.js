const plantData = [
  /* --------- CULTIVOS ORIGINALES (actualizados con vendors) ---------- */
  {
    "common_name": "Cacao",
    "scientific_name": "Theobroma cacao",
    "family": "Malvaceae",
    "image": "https://th.bing.com/th/id/OIP.VtqN5InWcNeb-PjMoiPHuAHaEK?rs=1&pid=ImgDetMain",
    "water": "Diario",
    "light": "Semi-sombra",
    "duration": 5,
    "ideal_ph": 6.5,
    "maximum_height_cm": 400,
    "recommended_regions": ["Magdalena", "Huila", "Cundinamarca"],
    "soil_type": "Limoso",
    "climate": "Tropical",
    "fertilizer": "Trimestral",
    "pests": ["Monilia", "Pudla"],
    "vendors": {
      "fertilizer": {
        "name": "AgroInsumos Colombia",
        "url": "https://agroinsumossa.com",
        "logo": "https://agroinsumossa.com/wp-content/uploads/2023/10/cropped-logo-agroinsumossa.png"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  },
  {
    "common_name": "Café",
    "scientific_name": "Coffea arabica",
    "family": "Rubiaceae",
    "image": "https://th.bing.com/th/id/OIP.4okGYIxuYilDNSd_4RZ6XwHaE7?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Sombra",
    "duration": 9,
    "ideal_ph": 6.0,
    "maximum_height_cm": 300,
    "recommended_regions": ["Antioquia", "Tolima", "Nariño"],
    "soil_type": "Arcilloso",
    "climate": "Tropical",
    "fertilizer": "Bimensual",
    "pests": ["Broca", "Roya"],
    "vendors": {
      "fertilizer": {
        "name": "Yara Colombia",
        "url": "https://www.yara.com.co",
        "logo": "https://www.yara.com/siteassets/news-and-media/knowledge_grows_for_a4.png"
      },
      "seeds": {
        "name": "Semillas Valle",
        "url": "https://semillasvalle.com",
        "logo": "https://semillasvalle.com/wp-content/uploads/2020/03/logo-semillas-valle.png"
      }
    }
  },
  {
    "common_name": "Maíz",
    "scientific_name": "Zea mays",
    "family": "Poaceae",
    "image": "https://th.bing.com/th/id/OIP.JRgm6ZlV3getb807ejbfgAHaFj?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 4,
    "ideal_ph": 6.8,
    "maximum_height_cm": 200,
    "recommended_regions": ["Caldas", "Boyacá", "Cauca"],
    "soil_type": "Franco",
    "climate": "Templado",
    "fertilizer": "Mensual",
    "pests": ["Gusano cogollero", "Carpocapsa"],
    "vendors": {
      "fertilizer": {
        "name": "Monómeros",
        "url": "https://www.monomeros.com",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/8/86/Monomeros_logo.png"
      },
      "seeds": {
        "name": "Bayer Crop Science",
        "url": "https://www.bayer.com/es/co/andina-y-cac-home",
        "logo": "https://www.bayer.com/sites/default/files/inline-images/bayer-logo.png"
      }
    }
  },
  {
    "common_name": "Plátano",
    "scientific_name": "Musa paradisiaca",
    "family": "Musaceae",
    "image": "https://th.bing.com/th/id/OIP.xyPRe54ockVKGnoIXAm6NAHaFL?rs=1&pid=ImgDetMain",
    "water": "Diario",
    "light": "Soleado",
    "duration": 12,
    "ideal_ph": 6.0,
    "maximum_height_cm": 500,
    "recommended_regions": ["Chocó", "Valle del Cauca", "Meta"],
    "soil_type": "Franco-arcilloso",
    "climate": "Húmedo",
    "fertilizer": "Mensual",
    "pests": ["Picudo", "Sigatoka"],
    "vendors": {
      "fertilizer": {
        "name": "Syngenta",
        "url": "https://www.syngenta.com",
        "logo": "https://seeklogo.com/images/S/syngenta-logo-134932.png"
      },
      "seeds": {
        "name": "Semillas Valle",
        "url": "https://semillasvalle.com",
        "logo": "https://semillasvalle.com/wp-content/uploads/2020/03/logo-semillas-valle.png"
      }
    }
  },
  {
    "common_name": "Yuca",
    "scientific_name": "Manihot esculenta",
    "family": "Euphorbiaceae",
    "image": "https://th.bing.com/th/id/OIP.NG_dtKyJRWR6K_XU9-lB_gHaE8?rs=1&pid=ImgDetMain",
    "water": "Quincenal",
    "light": "Soleado",
    "duration": 10,
    "ideal_ph": 5.5,
    "maximum_height_cm": 300,
    "recommended_regions": ["Vichada", "Guaviare", "Casanare"],
    "soil_type": "Arenoso",
    "climate": "Seco",
    "fertilizer": "Semestral",
    "pests": ["Chapa seca", "Taladro de la yuca"],
    "vendors": {
      "fertilizer": {
        "name": "AgroInsumos Colombia",
        "url": "https://agroinsumossa.com",
        "logo": "https://agroinsumossa.com/wp-content/uploads/2023/10/cropped-logo-agroinsumossa.png"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  },
  {
    "common_name": "Aguacate",
    "scientific_name": "Persea americana",
    "family": "Lauraceae",
    "image": "https://th.bing.com/th/id/OIP.F9LMsvKngCGPJrbTffqpNgHaFj?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 6,
    "ideal_ph": 6.0,
    "maximum_height_cm": 1000,
    "recommended_regions": ["Cundinamarca", "Antioquia", "Santander"],
    "soil_type": "Bien drenado",
    "climate": "Templado",
    "fertilizer": "Trimestral",
    "pests": ["Trips", "Mosca de la fruta"],
    "vendors": {
      "fertilizer": {
        "name": "Yara Colombia",
        "url": "https://www.yara.com.co",
        "logo": "https://www.yara.com/siteassets/news-and-media/knowledge_grows_for_a4.png"
      },
      "seeds": {
        "name": "Semillas Valle",
        "url": "https://semillasvalle.com",
        "logo": "https://semillasvalle.com/wp-content/uploads/2020/03/logo-semillas-valle.png"
      }
    }
  },
  {
    "common_name": "Papaya",
    "scientific_name": "Carica papaya",
    "family": "Caricaceae",
    "image": "https://th.bing.com/th/id/OIP.6sTj3A1VCrzjPBjsQBO2nAHaDr?rs=1&pid=ImgDetMain",
    "water": "Diario",
    "light": "Soleado",
    "duration": 7,
    "ideal_ph": 6.2,
    "maximum_height_cm": 600,
    "recommended_regions": ["Tolima", "Cauca", "Atlántico"],
    "soil_type": "Franco",
    "climate": "Tropical",
    "fertilizer": "Mensual",
    "pests": ["Araña roja", "Saltamontes"],
    "vendors": {
      "fertilizer": {
        "name": "Monómeros",
        "url": "https://www.monomeros.com",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/8/86/Monomeros_logo.png"
      },
      "seeds": {
        "name": "Bayer Crop Science",
        "url": "https://www.bayer.com/es/co/andina-y-cac-home",
        "logo": "https://www.bayer.com/sites/default/files/inline-images/bayer-logo.png"
      }
    }
  },
  {
    "common_name": "Banano",
    "scientific_name": "Musa acuminata",
    "family": "Musaceae",
    "image": "https://th.bing.com/th/id/OIP.UvxSqiXKQEhGF386GDqcmQHaE6?rs=1&pid=ImgDetMain",
    "water": "Diario",
    "light": "Soleado",
    "duration": 10,
    "ideal_ph": 6.0,
    "maximum_height_cm": 400,
    "recommended_regions": ["Chocó", "Magdalena", "Valle del Cauca"],
    "soil_type": "Arcilloso",
    "climate": "Húmedo",
    "fertilizer": "Mensual",
    "pests": ["Picudo", "Sigatoka negra"],
    "vendors": {
      "fertilizer": {
        "name": "Syngenta",
        "url": "https://www.syngenta.com",
        "logo": "https://seeklogo.com/images/S/syngenta-logo-134932.png"
      },
      "seeds": {
        "name": "Semillas Valle",
        "url": "https://semillasvalle.com",
        "logo": "https://semillasvalle.com/wp-content/uploads/2020/03/logo-semillas-valle.png"
      }
    }
  },
  {
    "common_name": "Fríjol",
    "scientific_name": "Phaseolus vulgaris",
    "family": "Fabaceae",
    "image": "https://th.bing.com/th/id/OIP.rQEg_ujp9KvzSGQfmOu9iwHaFj?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 3,
    "ideal_ph": 6.5,
    "maximum_height_cm": 100,
    "recommended_regions": ["Boyacá", "Cundinamarca", "Nariño"],
    "soil_type": "Bien drenado",
    "climate": "Templado",
    "fertilizer": "Bimensual",
    "pests": ["Gorgojo", "Mosquita blanca"],
    "vendors": {
      "fertilizer": {
        "name": "AgroInsumos Colombia",
        "url": "https://agroinsumossa.com",
        "logo": "https://agroinsumossa.com/wp-content/uploads/2023/10/cropped-logo-agroinsumossa.png"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  },
  {
    "common_name": "Arroz",
    "scientific_name": "Oryza sativa",
    "family": "Poaceae",
    "image": "https://th.bing.com/th/id/OIP.v1QfFAguBkWtLUp9oO_argHaE7?rs=1&pid=ImgDetMain",
    "water": "Diario",
    "light": "Soleado",
    "duration": 5,
    "ideal_ph": 6.2,
    "maximum_height_cm": 120,
    "recommended_regions": ["Tolima", "Caldas", "Santander"],
    "soil_type": "Inundable",
    "climate": "Cálido",
    "fertilizer": "Mensual",
    "pests": ["Gusano cogollero", "Chicharrita"],
    "vendors": {
      "fertilizer": {
        "name": "Yara Colombia",
        "url": "https://www.yara.com.co",
        "logo": "https://www.yara.com/siteassets/news-and-media/knowledge_grows_for_a4.png"
      },
      "seeds": {
        "name": "Semillas Valle",
        "url": "https://semillasvalle.com",
        "logo": "https://semillasvalle.com/wp-content/uploads/2020/03/logo-semillas-valle.png"
      }
    }
  },

  /* ------------- 40 NUEVOS CULTIVOS RESUMIDOS ------------------------- */
  {
    "common_name": "Tomate",
    "scientific_name": "Solanum lycopersicum",
    "family": "Solanaceae",
    "image": "https://th.bing.com/th/id/OIP.xL7ttgR3zKeRnrCQJsxAPwHaE7?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 4,
    "ideal_ph": 6.0,
    "maximum_height_cm": 180,
    "recommended_regions": ["Boyacá", "Antioquia", "Tolima"],
    "soil_type": "Franco",
    "climate": "Templado",
    "fertilizer": "Mensual",
    "pests": ["Palomilla", "Tuta absoluta"],
    "vendors": {
      "fertilizer": {
        "name": "Monómeros",
        "url": "https://www.monomeros.com",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/8/86/Monomeros_logo.png"
      },
      "seeds": {
        "name": "Bayer Crop Science",
        "url": "https://www.bayer.com/es/co/andina-y-cac-home",
        "logo": "https://www.bayer.com/sites/default/files/inline-images/bayer-logo.png"
      }
    }
  },
  {
    "common_name": "Papa",
    "scientific_name": "Solanum tuberosum",
    "family": "Solanaceae",
    "image": "https://th.bing.com/th/id/OIP.4M4VB6V-zjq3UW_26tKJhwHaFj?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 5,
    "ideal_ph": 5.8,
    "maximum_height_cm": 100,
    "recommended_regions": ["Cundinamarca", "Nariño", "Boyacá"],
    "soil_type": "Franco-arenoso",
    "climate": "Frío",
    "fertilizer": "Mensual",
    "pests": ["Gusano blanco", "Polilla guatemalteca"],
    "vendors": {
      "fertilizer": {
        "name": "Yara Colombia",
        "url": "https://www.yara.com.co",
        "logo": "https://www.yara.com/siteassets/news-and-media/knowledge_grows_for_a4.png"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  },
  /* ---------- NUEVOS CULTIVOS (11-20) ------------------------------ */
  {
    "common_name": "Piña",
    "scientific_name": "Ananas comosus",
    "family": "Bromeliaceae",
    "image": "https://th.bing.com/th/id/OIP.MG-cwMY7t4o0PyKa9ojNTgHaE7?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 14,
    "ideal_ph": 5.8,
    "maximum_height_cm": 150,
    "recommended_regions": ["Valle del Cauca", "Meta", "Córdoba"],
    "soil_type": "Franco-arenoso",
    "climate": "Tropical",
    "fertilizer": "Trimestral",
    "pests": ["Cochinilla rosada", "Picudo del corazón"],
    "vendors": {
      "fertilizer": {
        "name": "Yara Colombia",
        "url": "https://www.yara.com.co",
        "logo": "https://www.yara.com/siteassets/news-and-media/knowledge_grows_for_a4.png"
      },
      "seeds": {
        "name": "Semillas Valle",
        "url": "https://semillasvalle.com",
        "logo": "https://semillasvalle.com/wp-content/uploads/2020/03/logo-semillas-valle.png"
      }
    }
  },
  {
    "common_name": "Mango",
    "scientific_name": "Mangifera indica",
    "family": "Anacardiaceae",
    "image": "https://th.bing.com/th/id/OIP.5dXwLhTzwB0VjnTpMsvQ4wHaE8?rs=1&pid=ImgDetMain",
    "water": "Quincenal",
    "light": "Soleado",
    "duration": 9,
    "ideal_ph": 6.2,
    "maximum_height_cm": 1000,
    "recommended_regions": ["Bolívar", "Cesar", "Tolima"],
    "soil_type": "Franco-arcilloso",
    "climate": "Tropical seco",
    "fertilizer": "Trimestral",
    "pests": ["Mosca de la fruta", "Antracnosis"],
    "vendors": {
      "fertilizer": {
        "name": "Monómeros",
        "url": "https://www.monomeros.com.co",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/8/86/Monomeros_logo.png"
      },
      "seeds": {
        "name": "Bayer Crop Science",
        "url": "https://www.bayer.com/es/co/andina-y-cac-home",
        "logo": "https://www.bayer.com/sites/default/files/inline-images/bayer-logo.png"
      }
    }
  },
  {
    "common_name": "Lechuga",
    "scientific_name": "Lactuca sativa",
    "family": "Asteraceae",
    "image": "https://th.bing.com/th/id/OIP.M9q3yekuuQXIX9EToBt1SgHaE8?rs=1&pid=ImgDetMain",
    "water": "Diario",
    "light": "Semi-sombra",
    "duration": 2,
    "ideal_ph": 6.5,
    "maximum_height_cm": 30,
    "recommended_regions": ["Cundinamarca", "Antioquia", "Nariño"],
    "soil_type": "Franco",
    "climate": "Frío",
    "fertilizer": "Mensual",
    "pests": ["Babosa", "Pulgón"],
    "vendors": {
      "fertilizer": {
        "name": "Syngenta",
        "url": "https://www.syngenta.com",
        "logo": "https://seeklogo.com/vector-logo/134932/syngenta"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  },
  {
    "common_name": "Zanahoria",
    "scientific_name": "Daucus carota subsp. sativus",
    "family": "Apiaceae",
    "image": "https://th.bing.com/th/id/OIP.6Nk9quAptk_gddkm0r2UjwHaE7?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 4,
    "ideal_ph": 6.2,
    "maximum_height_cm": 40,
    "recommended_regions": ["Boyacá", "Cundinamarca", "Nariño"],
    "soil_type": "Franco-arenoso",
    "climate": "Templado",
    "fertilizer": "Bimensual",
    "pests": ["Mosca de la zanahoria", "Nematodos"],
    "vendors": {
      "fertilizer": {
        "name": "Yara Colombia",
        "url": "https://www.yara.com.co",
        "logo": "https://www.yara.com/siteassets/news-and-media/knowledge_grows_for_a4.png"
      },
      "seeds": {
        "name": "Semillas Valle",
        "url": "https://semillasvalle.com",
        "logo": "https://semillasvalle.com/wp-content/uploads/2020/03/logo-semillas-valle.png"
      }
    }
  },
  {
    "common_name": "Cebolla de bulbo",
    "scientific_name": "Allium cepa",
    "family": "Amaryllidaceae",
    "image": "https://th.bing.com/th/id/OIP.Mp4ldu8uZgXP4vK_6h1yFgHaE8?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 5,
    "ideal_ph": 6.0,
    "maximum_height_cm": 60,
    "recommended_regions": ["Boyacá", "Norte de Santander", "Cauca"],
    "soil_type": "Franco-arcilloso",
    "climate": "Templado",
    "fertilizer": "Mensual",
    "pests": ["Trips", "Mosca de la cebolla"],
    "vendors": {
      "fertilizer": {
        "name": "Monómeros",
        "url": "https://www.monomeros.com.co",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/8/86/Monomeros_logo.png"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  },
  {
    "common_name": "Pimentón",
    "scientific_name": "Capsicum annuum",
    "family": "Solanaceae",
    "image": "https://th.bing.com/th/id/OIP.5pVyWrB1SfBJTcDORoO_hQHaE8?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 6,
    "ideal_ph": 6.3,
    "maximum_height_cm": 120,
    "recommended_regions": ["Meta", "Huila", "Caldas"],
    "soil_type": "Franco",
    "climate": "Cálido",
    "fertilizer": "Mensual",
    "pests": ["Araña roja", "Trips"],
    "vendors": {
      "fertilizer": {
        "name": "Syngenta",
        "url": "https://www.syngenta.com",
        "logo": "https://seeklogo.com/vector-logo/134932/syngenta"
      },
      "seeds": {
        "name": "Bayer Crop Science",
        "url": "https://www.bayer.com/es/co/andina-y-cac-home",
        "logo": "https://www.bayer.com/sites/default/files/inline-images/bayer-logo.png"
      }
    }
  },
  {
    "common_name": "Fresa",
    "scientific_name": "Fragaria × ananassa",
    "family": "Rosaceae",
    "image": "https://th.bing.com/th/id/OIP.Ys6IozkVdW-DwckLr4u6gwHaE8?rs=1&pid=ImgDetMain",
    "water": "Diario",
    "light": "Soleado",
    "duration": 4,
    "ideal_ph": 6.0,
    "maximum_height_cm": 25,
    "recommended_regions": ["Cundinamarca", "Antioquia", "Santander"],
    "soil_type": "Franco-arenoso",
    "climate": "Frío",
    "fertilizer": "Mensual",
    "pests": ["Ácaro rojo", "Botrytis"],
    "vendors": {
      "fertilizer": {
        "name": "Yara Colombia",
        "url": "https://www.yara.com.co",
        "logo": "https://www.yara.com/siteassets/news-and-media/knowledge_grows_for_a4.png"
      },
      "seeds": {
        "name": "Semillas Valle",
        "url": "https://semillasvalle.com",
        "logo": "https://semillasvalle.com/wp-content/uploads/2020/03/logo-semillas-valle.png"
      }
    }
  },
  {
    "common_name": "Uchuva",
    "scientific_name": "Physalis peruviana",
    "family": "Solanaceae",
    "image": "https://th.bing.com/th/id/OIP.iosilheIN_rc6wEMNAKizgHaE8?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 8,
    "ideal_ph": 6.4,
    "maximum_height_cm": 180,
    "recommended_regions": ["Cundinamarca", "Boyacá", "Antioquia"],
    "soil_type": "Franco-arcilloso",
    "climate": "Templado",
    "fertilizer": "Bimensual",
    "pests": ["Polilla del tomate", "Trips"],
    "vendors": {
      "fertilizer": {
        "name": "Monómeros",
        "url": "https://www.monomeros.com.co",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/8/86/Monomeros_logo.png"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  },
  {
    "common_name": "Lulo",
    "scientific_name": "Solanum quitoense",
    "family": "Solanaceae",
    "image": "https://th.bing.com/th/id/OIP.UzGzWvoQBYS36eY7pUu1lAHaE8?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Semi-sombra",
    "duration": 10,
    "ideal_ph": 5.6,
    "maximum_height_cm": 350,
    "recommended_regions": ["Tolima", "Huila", "Nariño"],
    "soil_type": "Franco-arcilloso",
    "climate": "Húmedo",
    "fertilizer": "Trimestral",
    "pests": ["Moko", "Pudrición del pedúnculo"],
    "vendors": {
      "fertilizer": {
        "name": "Syngenta",
        "url": "https://www.syngenta.com",
        "logo": "https://seeklogo.com/vector-logo/134932/syngenta"
      },
      "seeds": {
        "name": "Semillas Valle",
        "url": "https://semillasvalle.com",
        "logo": "https://semillasvalle.com/wp-content/uploads/2020/03/logo-semillas-valle.png"
      }
    }
  },
  {
    "common_name": "Soya",
    "scientific_name": "Glycine max",
    "family": "Fabaceae",
    "image": "https://th.bing.com/th/id/OIP.d1CYjSWX2eC9pOIsPN19DgHaE6?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 5,
    "ideal_ph": 6.3,
    "maximum_height_cm": 100,
    "recommended_regions": ["Meta", "Casanare", "Guaviare"],
    "soil_type": "Franco-arenoso",
    "climate": "Tropical húmedo",
    "fertilizer": "Bimensual",
    "pests": ["Chinche verde", "Oruga militar"],
    "vendors": {
      "fertilizer": {
        "name": "Yara Colombia",
        "url": "https://www.yara.com.co",
        "logo": "https://www.yara.com/siteassets/news-and-media/knowledge_grows_for_a4.png"
      },
      "seeds": {
        "name": "Bayer Crop Science",
        "url": "https://www.bayer.com/es/co/andina-y-cac-home",
        "logo": "https://www.bayer.com/sites/default/files/inline-images/bayer-logo.png"
      }
    }
  },
  /* --------- CULTIVOS 21-30 ------------------------------------- */
  {
    "common_name": "Cebada",
    "scientific_name": "Hordeum vulgare",
    "family": "Poaceae",
    "image": "https://th.bing.com/th/id/OIP.5h1j2l_TmIxu1Ws9vyZcGwHaE8?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 5,
    "ideal_ph": 6.5,
    "maximum_height_cm": 120,
    "recommended_regions": ["Boyacá", "Cundinamarca", "Nariño"],
    "soil_type": "Franco",
    "climate": "Frío",
    "fertilizer": "Bimensual",
    "pests": ["Royas", "Pulgones"],
    "vendors": {
      "fertilizer": {
        "name": "Yara Colombia",
        "url": "https://www.yara.com.co",
        "logo": "https://www.yara.com/siteassets/news-and-media/knowledge_grows_for_a4.png"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  },
  {
    "common_name": "Ajo",
    "scientific_name": "Allium sativum",
    "family": "Amaryllidaceae",
    "image": "https://th.bing.com/th/id/OIP.Bf4H3iGE72oLqjB3FQaSowHaE6?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 5,
    "ideal_ph": 6.2,
    "maximum_height_cm": 60,
    "recommended_regions": ["Nariño", "Boyacá", "Cundinamarca"],
    "soil_type": "Franco-arenoso",
    "climate": "Templado frío",
    "fertilizer": "Mensual",
    "pests": ["Trips", "Mildiú"],
    "vendors": {
      "fertilizer": {
        "name": "Monómeros",
        "url": "https://www.monomeros.com.co",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/8/86/Monomeros_logo.png"
      },
      "seeds": {
        "name": "Semillas Valle",
        "url": "https://semillasvalle.com",
        "logo": "https://semillasvalle.com/wp-content/uploads/2020/03/logo-semillas-valle.png"
      }
    }
  },
  {
    "common_name": "Caña de azúcar",
    "scientific_name": "Saccharum officinarum",
    "family": "Poaceae",
    "image": "https://th.bing.com/th/id/OIP.HQ8YBUkOlZkme3-RltS4zwHaFj?rs=1&pid=ImgDetMain",
    "water": "Quincenal",
    "light": "Soleado",
    "duration": 14,
    "ideal_ph": 6.3,
    "maximum_height_cm": 600,
    "recommended_regions": ["Valle del Cauca", "Cauca", "Meta"],
    "soil_type": "Franco-arcilloso",
    "climate": "Cálido húmedo",
    "fertilizer": "Trimestral",
    "pests": ["Barrenador", "Escama"],
    "vendors": {
      "fertilizer": {
        "name": "Syngenta",
        "url": "https://www.syngenta.com",
        "logo": "https://seeklogo.com/vector-logo/134932/syngenta"
      },
      "seeds": {
        "name": "Bayer Crop Science",
        "url": "https://www.bayer.com/es/co/andina-y-cac-home",
        "logo": "https://www.bayer.com/sites/default/files/inline-images/bayer-logo.png"
      }
    }
  },
  {
    "common_name": "Maracuyá",
    "scientific_name": "Passiflora edulis",
    "family": "Passifloraceae",
    "image": "https://th.bing.com/th/id/OIP.2Kn6JMwuQxLz3s2eMNDGVAHaE8?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 8,
    "ideal_ph": 6.0,
    "maximum_height_cm": 600,
    "recommended_regions": ["Huila", "Tolima", "Meta"],
    "soil_type": "Franco",
    "climate": "Tropical",
    "fertilizer": "Mensual",
    "pests": ["Mosca de la fruta", "Antracnosis"],
    "vendors": {
      "fertilizer": {
        "name": "Yara Colombia",
        "url": "https://www.yara.com.co",
        "logo": "https://www.yara.com/siteassets/news-and-media/knowledge_grows_for_a4.png"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  },
  {
    "common_name": "Mora de Castilla",
    "scientific_name": "Rubus glaucus",
    "family": "Rosaceae",
    "image": "https://th.bing.com/th/id/OIP.fdSid9iJ7JZ5uz6zKjLdnAHaE8?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Semi-sombra",
    "duration": 7,
    "ideal_ph": 5.8,
    "maximum_height_cm": 250,
    "recommended_regions": ["Cundinamarca", "Antioquia", "Huila"],
    "soil_type": "Franco-arcilloso",
    "climate": "Templado húmedo",
    "fertilizer": "Bimensual",
    "pests": ["Mosca de la fruta", "Botrytis"],
    "vendors": {
      "fertilizer": {
        "name": "Monómeros",
        "url": "https://www.monomeros.com.co",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/8/86/Monomeros_logo.png"
      },
      "seeds": {
        "name": "Semillas Valle",
        "url": "https://semillasvalle.com",
        "logo": "https://semillasvalle.com/wp-content/uploads/2020/03/logo-semillas-valle.png"
      }
    }
  },
  {
    "common_name": "Ñame",
    "scientific_name": "Dioscorea rotundata",
    "family": "Dioscoreaceae",
    "image": "https://th.bing.com/th/id/OIP.rOhfc4rooDCQOJ0ORJp8vwHaE6?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 10,
    "ideal_ph": 5.9,
    "maximum_height_cm": 300,
    "recommended_regions": ["Córdoba", "Sucre", "Bolívar"],
    "soil_type": "Franco-arenoso",
    "climate": "Tropical húmedo",
    "fertilizer": "Trimestral",
    "pests": ["Gorgojo de ñame", "Ácaros"],
    "vendors": {
      "fertilizer": {
        "name": "Yara Colombia",
        "url": "https://www.yara.com.co",
        "logo": "https://www.yara.com/siteassets/news-and-media/knowledge_grows_for_a4.png"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  },
  {
    "common_name": "Caucho",
    "scientific_name": "Hevea brasiliensis",
    "family": "Euphorbiaceae",
    "image": "https://th.bing.com/th/id/OIP.Tgc2_XZe1bLytXH_zKnZdAHaE6?rs=1&pid=ImgDetMain",
    "water": "Quincenal",
    "light": "Semi-sombra",
    "duration": 36,
    "ideal_ph": 6.2,
    "maximum_height_cm": 2000,
    "recommended_regions": ["Caquetá", "Meta", "Putumayo"],
    "soil_type": "Franco-arcilloso",
    "climate": "Húmedo",
    "fertilizer": "Semestral",
    "pests": ["Corynespora", "Oídio"],
    "vendors": {
      "fertilizer": {
        "name": "Syngenta",
        "url": "https://www.syngenta.com",
        "logo": "https://seeklogo.com/vector-logo/134932/syngenta"
      },
      "seeds": {
        "name": "Bayer Crop Science",
        "url": "https://www.bayer.com/es/co/andina-y-cac-home",
        "logo": "https://www.bayer.com/sites/default/files/inline-images/bayer-logo.png"
      }
    }
  },
  {
    "common_name": "Sábila",
    "scientific_name": "Aloe vera",
    "family": "Asphodelaceae",
    "image": "https://th.bing.com/th/id/OIP.bxFzwwaA0EmJlMZ5IuwdVAHaE8?rs=1&pid=ImgDetMain",
    "water": "Mensual",
    "light": "Soleado",
    "duration": 12,
    "ideal_ph": 6.7,
    "maximum_height_cm": 60,
    "recommended_regions": ["La Guajira", "Valle del Cauca", "Santander"],
    "soil_type": "Arenoso",
    "climate": "Seco",
    "fertilizer": "Semestral",
    "pests": ["Cochinilla", "Pudrición radicular"],
    "vendors": {
      "fertilizer": {
        "name": "AgroInsumos Colombia",
        "url": "https://agroinsumossa.com",
        "logo": "https://agroinsumossa.com/wp-content/uploads/2023/10/cropped-logo-agroinsumossa.png"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  },
  {
    "common_name": "Quinua",
    "scientific_name": "Chenopodium quinoa",
    "family": "Amaranthaceae",
    "image": "https://th.bing.com/th/id/OIP.A8Jg8DnBHLUQtXslWZ8BEAHaE6?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 5,
    "ideal_ph": 6.4,
    "maximum_height_cm": 150,
    "recommended_regions": ["Boyacá", "Nariño", "Cauca"],
    "soil_type": "Franco-arenoso",
    "climate": "Frío",
    "fertilizer": "Bimensual",
    "pests": ["Pulgón", "Mildeu"],
    "vendors": {
      "fertilizer": {
        "name": "Yara Colombia",
        "url": "https://www.yara.com.co",
        "logo": "https://www.yara.com/siteassets/news-and-media/knowledge_grows_for_a4.png"
      },
      "seeds": {
        "name": "Semillas Valle",
        "url": "https://semillasvalle.com",
        "logo": "https://semillasvalle.com/wp-content/uploads/2020/03/logo-semillas-valle.png"
      }
    }
  },
  {
    "common_name": "Cilantro",
    "scientific_name": "Coriandrum sativum",
    "family": "Apiaceae",
    "image": "https://th.bing.com/th/id/OIP.5oHA1y2yf5bTxPafz31T7QHaE7?rs=1&pid=ImgDetMain",
    "water": "Diario",
    "light": "Soleado",
    "duration": 3,
    "ideal_ph": 6.5,
    "maximum_height_cm": 50,
    "recommended_regions": ["Cundinamarca", "Santander", "Tolima"],
    "soil_type": "Franco",
    "climate": "Templado",
    "fertilizer": "Mensual",
    "pests": ["Pulgón", "Mildiu"],
    "vendors": {
      "fertilizer": {
        "name": "Monómeros",
        "url": "https://www.monomeros.com.co",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/8/86/Monomeros_logo.png"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  },
  /* ------------------------- CULTIVOS 31-40 ---------------------------- */
  {
    "common_name": "Guayaba",
    "scientific_name": "Psidium guajava",
    "family": "Myrtaceae",
    "image": "https://th.bing.com/th/id/OIP.gD1lHNcuaur7fY5vR4I_6wHaE8?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 8,
    "ideal_ph": 6.5,
    "maximum_height_cm": 600,
    "recommended_regions": ["Santander", "Tolima", "Valle del Cauca"],
    "soil_type": "Franco-arenoso",
    "climate": "Tropical",
    "fertilizer": "Trimestral",
    "pests": ["Mosca de la fruta", "Antracnosis"],
    "vendors": {
      "fertilizer": {
        "name": "Yara Colombia",
        "url": "https://www.yara.com.co",
        "logo": "https://www.yara.com/siteassets/news-and-media/knowledge_grows_for_a4.png"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  },
  {
    "common_name": "Naranja",
    "scientific_name": "Citrus sinensis",
    "family": "Rutaceae",
    "image": "https://th.bing.com/th/id/OIP.d1UL27NXY5E6qxwPL7yX-QHaE7?rs=1&pid=ImgDetMain",
    "water": "Quincenal",
    "light": "Soleado",
    "duration": 12,
    "ideal_ph": 6.0,
    "maximum_height_cm": 800,
    "recommended_regions": ["Meta", "Quindío", "Antioquia"],
    "soil_type": "Franco",
    "climate": "Tropical húmedo",
    "fertilizer": "Trimestral",
    "pests": ["Ácaro rojo", "Huanglongbing"],
    "vendors": {
      "fertilizer": {
        "name": "Monómeros",
        "url": "https://www.monomeros.com.co",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/8/86/Monomeros_logo.png"
      },
      "seeds": {
        "name": "Semillas Valle",
        "url": "https://semillasvalle.com",
        "logo": "https://semillasvalle.com/wp-content/uploads/2020/03/logo-semillas-valle.png"
      }
    }
  },
  {
    "common_name": "Limón Tahití",
    "scientific_name": "Citrus latifolia",
    "family": "Rutaceae",
    "image": "https://th.bing.com/th/id/OIP.Oe9aUp3Q9tXr2qM1avpkHwHaE8?rs=1&pid=ImgDetMain",
    "water": "Quincenal",
    "light": "Soleado",
    "duration": 11,
    "ideal_ph": 6.0,
    "maximum_height_cm": 700,
    "recommended_regions": ["Cauca", "Tolima", "Magdalena"],
    "soil_type": "Franco-arenoso",
    "climate": "Tropical",
    "fertilizer": "Trimestral",
    "pests": ["Minador de la hoja", "Huanglongbing"],
    "vendors": {
      "fertilizer": {
        "name": "Syngenta",
        "url": "https://www.syngenta.com",
        "logo": "https://seeklogo.com/vector-logo/134932/syngenta"
      },
      "seeds": {
        "name": "Bayer Crop Science",
        "url": "https://www.bayer.com/es/co/andina-y-cac-home",
        "logo": "https://www.bayer.com/sites/default/files/inline-images/bayer-logo.png"
      }
    }
  },
  {
    "common_name": "Melón",
    "scientific_name": "Cucumis melo",
    "family": "Cucurbitaceae",
    "image": "https://th.bing.com/th/id/OIP._z0U7cqYcp0XFiTAfVcUVwHaE8?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 4,
    "ideal_ph": 6.5,
    "maximum_height_cm": 40,
    "recommended_regions": ["Córdoba", "La Guajira", "Huila"],
    "soil_type": "Franco-arenoso",
    "climate": "Cálido",
    "fertilizer": "Mensual",
    "pests": ["Mosca blanca", "Oídio"],
    "vendors": {
      "fertilizer": {
        "name": "Yara Colombia",
        "url": "https://www.yara.com.co",
        "logo": "https://www.yara.com/siteassets/news-and-media/knowledge_grows_for_a4.png"
      },
      "seeds": {
        "name": "Semillas Valle",
        "url": "https://semillasvalle.com",
        "logo": "https://semillasvalle.com/wp-content/uploads/2020/03/logo-semillas-valle.png"
      }
    }
  },
  {
    "common_name": "Sandía",
    "scientific_name": "Citrullus lanatus",
    "family": "Cucurbitaceae",
    "image": "https://th.bing.com/th/id/OIP.dM4G4XMoKdY6e9_7g4Gp9QHaE8?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 4,
    "ideal_ph": 6.2,
    "maximum_height_cm": 50,
    "recommended_regions": ["Atlántico", "Cesar", "Córdoba"],
    "soil_type": "Franco-arenoso",
    "climate": "Cálido",
    "fertilizer": "Mensual",
    "pests": ["Trips", "Mildiu velloso"],
    "vendors": {
      "fertilizer": {
        "name": "Monómeros",
        "url": "https://www.monomeros.com.co",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/8/86/Monomeros_logo.png"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  },
  {
    "common_name": "Pepino cohombro",
    "scientific_name": "Cucumis sativus",
    "family": "Cucurbitaceae",
    "image": "https://th.bing.com/th/id/OIP.1_b0hrILBmBk1JfI3z7X-wHaE7?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 3,
    "ideal_ph": 6.0,
    "maximum_height_cm": 250,
    "recommended_regions": ["Cundinamarca", "Antioquia", "Caldas"],
    "soil_type": "Franco",
    "climate": "Templado",
    "fertilizer": "Mensual",
    "pests": ["Pulgón", "Oídio"],
    "vendors": {
      "fertilizer": {
        "name": "Syngenta",
        "url": "https://www.syngenta.com",
        "logo": "https://seeklogo.com/vector-logo/134932/syngenta"
      },
      "seeds": {
        "name": "Bayer Crop Science",
        "url": "https://www.bayer.com/es/co/andina-y-cac-home",
        "logo": "https://www.bayer.com/sites/default/files/inline-images/bayer-logo.png"
      }
    }
  },
  {
    "common_name": "Auyama (Calabaza)",
    "scientific_name": "Cucurbita moschata",
    "family": "Cucurbitaceae",
    "image": "https://th.bing.com/th/id/OIP.6wpwLw2pYg03N6r6Dg9OUAHaE8?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 4,
    "ideal_ph": 6.0,
    "maximum_height_cm": 45,
    "recommended_regions": ["Bolívar", "Sucre", "Atlántico"],
    "soil_type": "Franco-arenoso",
    "climate": "Tropical seco",
    "fertilizer": "Mensual",
    "pests": ["Mosca blanca", "Mildiu polvoso"],
    "vendors": {
      "fertilizer": {
        "name": "AgroInsumos Colombia",
        "url": "https://agroinsumossa.com",
        "logo": "https://agroinsumossa.com/wp-content/uploads/2023/10/cropped-logo-agroinsumossa.png"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  },
  {
    "common_name": "Arveja",
    "scientific_name": "Pisum sativum",
    "family": "Fabaceae",
    "image": "https://th.bing.com/th/id/OIP.q7y70Cxhp9CoHi_hG0_cswHaE7?rs=1&pid=ImgDetMain",
    "water": "Semanal",
    "light": "Soleado",
    "duration": 3,
    "ideal_ph": 6.3,
    "maximum_height_cm": 120,
    "recommended_regions": ["Nariño", "Boyacá", "Cundinamarca"],
    "soil_type": "Franco-arcilloso",
    "climate": "Templado frío",
    "fertilizer": "Bimensual",
    "pests": ["Gorgojo", "Mildiu"],
    "vendors": {
      "fertilizer": {
        "name": "Yara Colombia",
        "url": "https://www.yara.com.co",
        "logo": "https://www.yara.com/siteassets/news-and-media/knowledge_grows_for_a4.png"
      },
      "seeds": {
        "name": "Semillas Valle",
        "url": "https://semillasvalle.com",
        "logo": "https://semillasvalle.com/wp-content/uploads/2020/03/logo-semillas-valle.png"
      }
    }
  },
  {
    "common_name": "Sorgo",
    "scientific_name": "Sorghum bicolor",
    "family": "Poaceae",
    "image": "https://th.bing.com/th/id/OIP.JFHdQBLF0A2APDTuhUMjvwHaE7?rs=1&pid=ImgDetMain",
    "water": "Quincenal",
    "light": "Soleado",
    "duration": 4,
    "ideal_ph": 6.0,
    "maximum_height_cm": 250,
    "recommended_regions": ["Cesar", "Magdalena", "Córdoba"],
    "soil_type": "Franco-arenoso",
    "climate": "Cálido seco",
    "fertilizer": "Mensual",
    "pests": ["Pulgón amarillo", "Barrenador del tallo"],
    "vendors": {
      "fertilizer": {
        "name": "Monómeros",
        "url": "https://www.monomeros.com.co",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/8/86/Monomeros_logo.png"
      },
      "seeds": {
        "name": "Bayer Crop Science",
        "url": "https://www.bayer.com/es/co/andina-y-cac-home",
        "logo": "https://www.bayer.com/sites/default/files/inline-images/bayer-logo.png"
      }
    }
  },
  {
    "common_name": "Algodón",
    "scientific_name": "Gossypium hirsutum",
    "family": "Malvaceae",
    "image": "https://th.bing.com/th/id/OIP.gp42Ach0IAoQ2jGJGFd62AHaE8?rs=1&pid=ImgDetMain",
    "water": "Quincenal",
    "light": "Soleado",
    "duration": 6,
    "ideal_ph": 6.3,
    "maximum_height_cm": 160,
    "recommended_regions": ["Córdoba", "Cesar", "Tolima"],
    "soil_type": "Franco-arenoso",
    "climate": "Cálido",
    "fertilizer": "Bimensual",
    "pests": ["Picudo del algodonero", "Gusano rosado"],
    "vendors": {
      "fertilizer": {
        "name": "Syngenta",
        "url": "https://www.syngenta.com",
        "logo": "https://seeklogo.com/vector-logo/134932/syngenta"
      },
      "seeds": {
        "name": "SemillasColombia",
        "url": "https://semillascolombia.org",
        "logo": "https://semillascolombia.org/wp-content/uploads/2024/04/logo-semillascolombia.png"
      }
    }
  }

];

// Renderizado inicial
document.addEventListener('DOMContentLoaded', () => renderPlants(plantData));

// Agregar variables para la paginación
let currentPage = 0;
const itemsPerPage = 12;

function renderPlants(list) {
  const grid = document.getElementById('plantGrid');
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min((currentPage + 1) * itemsPerPage, list.length);
  const currentItems = list.slice(startIndex, endIndex);
  
  // Limpiar grid solo si es la primera página
  if (currentPage === 0) {
    grid.innerHTML = '';
  }

  currentItems.forEach(p => {
    const card = document.createElement('div');
    card.className = 'bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105 transform transition';
    card.onclick = () => openModal(p);
    card.innerHTML = `
      <img src="${p.image}" alt="${p.common_name}" class="w-full h-40 object-cover">
      <div class="p-4">
        <h2 class="text-lg font-bold mb-1 capitalize">${p.common_name}</h2>
        <ul class="text-sm text-gray-700 space-y-1">
          <li><strong>Riego:</strong> ${p.water}</li>
          <li><strong>Luz:</strong> ${p.light}</li>
          <li><strong>Cosecha:</strong> ${p.duration} meses</li>
        </ul>
      </div>`;
    grid.appendChild(card);
  });

  // Eliminar botón "Mostrar más" existente si hay uno
  const existingButton = document.getElementById('showMoreButton');
  if (existingButton) {
    existingButton.remove();
  }

  // Agregar botón "Mostrar más" solo si hay más elementos y después de todos los items
  if (endIndex < list.length) {
    const showMoreBtn = document.createElement('button');
    showMoreBtn.id = 'showMoreButton';
    showMoreBtn.className = 'w-full bg-green-600 text-white py-2 px-4 rounded mt-4 hover:bg-green-700 transition';
    showMoreBtn.textContent = `Mostrar más cultivos (${endIndex} de ${list.length})`;
    showMoreBtn.onclick = () => {
      currentPage++;
      renderPlants(list);
    };
    // Agregar el botón después de la cuadrícula
    grid.parentNode.insertBefore(showMoreBtn, grid.nextSibling);
  }
}

// Modificar la función applyFilters para resetear la paginación
function applyFilters() {
  const fw = document.getElementById('filterWater').value;
  const fl = document.getElementById('filterLight').value;
  const dmin = parseInt(document.getElementById('filterDurationMin').value) || 0;
  const dmax = parseInt(document.getElementById('filterDurationMax').value) || Infinity;
  const reg = document.getElementById('filterRegion').value;

  currentPage = 0; // Resetear la página al aplicar filtros
  
  renderPlants(
    plantData.filter(p =>
      (!fw || p.water === fw) &&
      (!fl || p.light === fl) &&
      (p.duration >= dmin && p.duration <= dmax) &&
      (!reg || p.recommended_regions.includes(reg))
    )
  );
  toggleSidebar();
}

function openModal(p) {
  const body = document.querySelector('.modal-body');
  body.innerHTML = `
    <h2 class="text-2xl font-bold mb-2 capitalize">${p.common_name}</h2>
    <ul class="text-sm text-gray-700 space-y-1">
      <li><strong>Científico:</strong> ${p.scientific_name}</li>
      <li><strong>Familia:</strong> ${p.family}</li>
      <li><strong>pH óptimo:</strong> ${p.ideal_ph}</li>
      <li><strong>Regiones:</strong> ${p.recommended_regions.join(', ')}</li>
      <li><strong>Suelo:</strong> ${p.soil_type}</li>
      <li><strong>Clima:</strong> ${p.climate}</li>
      <li><strong>Fertilizante:</strong> ${p.fertilizer}</li>
      <li><strong>Plagas:</strong> ${p.pests.join(', ')}</li>
    </ul>
    
    <div class="mt-4 border-t pt-4">
      <h3 class="font-bold mb-2">¿Dónde comprar?</h3>
      
      <div class="grid grid-cols-2 gap-4">
        <!-- Fertilizantes -->
        <div class="border p-3 rounded">
          <h4 class="font-semibold">Fertilizantes</h4>
          <img src="${p.vendors?.fertilizer?.logo}" alt="Logo ${p.vendors?.fertilizer?.name}" class="h-12 my-2">
          <a href="${p.vendors?.fertilizer?.url}" 
             target="_blank" 
             class="text-green-600 hover:underline block">
            ${p.vendors?.fertilizer?.name}
          </a>
        </div>
        
        <!-- Semillas -->
        <div class="border p-3 rounded">
          <h4 class="font-semibold">Semillas</h4>
          <img src="${p.vendors?.seeds?.logo}" alt="Logo ${p.vendors?.seeds?.name}" class="h-12 my-2">
          <a href="${p.vendors?.seeds?.url}" 
             target="_blank" 
             class="text-green-600 hover:underline block">
            ${p.vendors?.seeds?.name}
          </a>
        </div>
      </div>
    </div>`;
  document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('-translate-x-full');
}

function toggleChat() {
  document.getElementById('chatWidget').classList.toggle('hidden');
}

// Envío de chat con archivos
async function sendChat() {
  const input = document.getElementById('chatInput');
  const files = document.getElementById('chatFileInput').files;
  const question = input.value.trim();
  if (!question && files.length === 0) return;

  const contentEl = document.getElementById('chatContent');
  contentEl.innerHTML += `<div class="text-right text-sm text-green-800 mb-1"><strong>Tú:</strong> ${question}</div>`;
  input.value = '';
  document.getElementById('chatFileInput').value = '';

  const formData = new FormData();
  formData.append('message', question);
  for (let i = 0; i < files.length; i++) {
    formData.append('files', files[i]);
  }

  try {
    const res = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      body: formData
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || 'Error en el servidor');

    contentEl.innerHTML += `<div class="text-left text-sm text-gray-800 mb-2"><strong>Bot:</strong> ${json.reply}</div>`;
  } catch (err) {
    console.error(err);
    contentEl.innerHTML += `<div class="text-left text-sm text-red-600 mb-2"><strong>Bot:</strong> ${err.message}</div>`;
  }

  contentEl.scrollTop = contentEl.scrollHeight;
}

// Búsqueda en tiempo real
document.getElementById('searchInput').addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  currentPage = 0; // Resetear la página al buscar
  renderPlants(
    plantData.filter(p =>
      p.common_name.toLowerCase().includes(term) ||
      p.scientific_name.toLowerCase().includes(term)
    )
  );
});