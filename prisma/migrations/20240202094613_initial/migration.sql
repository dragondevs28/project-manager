-- CreateEnum
CREATE TYPE "Frameworks" AS ENUM ('REACTJS', 'NODEJS', 'NEXTJS', 'PYTHON', 'DJANGO', 'FLASK', 'FASTAPI', 'ASPDOTNET', 'TYPESCRIPT', 'JAVASCRIPT', 'CPLUSPLUS', 'CSHARP', 'RUST', 'JAVA', 'PHP', 'RUBY', 'GOLANG', 'SWIFT', 'KOTLIN', 'DART', 'ANGULAR', 'VUEJS', 'DOTNET', 'HTML', 'CSS', 'SQL', 'MYSQL', 'POSTGRESQL', 'SQLITE', 'SQLALCHEMY', 'MONGODB', 'C', 'R', 'SWIFTUI', 'BASH', 'PERL', 'JQUERY', 'SELENIUM', 'DOCKER', 'KUBERNETES', 'JENKINS', 'GITLAB', 'GITHUB', 'ANSIBLE', 'PROMETHEUS', 'GRAFANA', 'AWS', 'AZURE', 'GOOGLECLOUD', 'EXPRESSJS', 'SPRINGBOOT', 'FLUTTER', 'LARAVEL', 'REACTNATIVE');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'STUCK', 'COMPLETED', 'CANCELLED', 'PENDING', 'OVERDUE', 'REOPENED');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('LOW', 'NORMAL', 'HIGH', 'CRITICAL');

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "frameworks" "Frameworks"[],
    "status" "Status" NOT NULL DEFAULT 'NOT_STARTED',
    "priority" "Priority" NOT NULL DEFAULT 'NORMAL',
    "owner" TEXT DEFAULT 'Selected User',
    "dueDate" TIMESTAMP(3) NOT NULL,
    "timeline" TIMESTAMP(3)[],
    "budget" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_id_key" ON "Project"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Project_name_key" ON "Project"("name");
