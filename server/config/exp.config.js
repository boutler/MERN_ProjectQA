"use strict";

import path from "path";

// Server classs configuration
export default {
  port: 3000,
  env: "dev",
  exp_views: path.join(__dirname, "../../Application/views"),
  exp_view_engine: "jsx",
  exp_x_powered_by: false
};
