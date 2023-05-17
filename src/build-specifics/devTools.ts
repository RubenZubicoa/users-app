import { FuseMockApiModule } from "projects/mock-api/src/public-api";
import { mockApiServices } from "src/mock-api";

export const devToolsModules = [FuseMockApiModule.forRoot(mockApiServices)];
