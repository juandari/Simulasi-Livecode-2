'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Inventories', [
      {
        id: 1,
        name: 'Apple Mac Mini 2018 Core i3 SSD 128 GB',
        image_url:
          'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/9/27/64681733/64681733_2ff55480-4c52-4d1c-9989-59884d391b14_450_450',
        price: 12990000,
        quantity: 20,
        status: 'Bagus',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'led Monitor Acer Eb192Q',
        image_url:
          'https://static.bmdstatic.com/pk/product/medium/5bc6c1406d763.jpg',
        price: 825000,
        quantity: 20,
        status: 'Bagus',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'HP Magenta Ink Cartridge',
        price: 139000,
        image_url:
          'https://static.bmdstatic.com/pk/product/medium/HP-Magenta-Ink-Cartridge-18-[C4938A]-SKU00208180_0-20140524131316.jpg',
        quantity: 3,
        status: 'Bagus',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'cctv camera',
        image_url:
          'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/11/11/407624111/407624111_49628363-c57d-42ee-a95d-b8a5f9adaace.jpg',
        price: 139000,
        quantity: 3,
        status: 'Bagus',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        name: 'CCD Camera',
        image_url:
          'https://www.jakartanotebook.com/images/products/70/63/35184/2/kamera-cctv-outdoor-waterproof-palsu-black-1.jpg',
        price: 139000,
        quantity: 3,
        status: 'Bagus',
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Inventories', null, {})
  },
}
