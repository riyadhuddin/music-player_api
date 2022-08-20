'use strict';

/**
 * music-player service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::music-player.music-player');
