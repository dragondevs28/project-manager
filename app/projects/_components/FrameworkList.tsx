import React from 'react';
import {
  AngularjsPlain,
  CplusplusPlain,
  CsharpPlain,
  DartPlain,
  DjangoPlain,
  DotnetcorePlain,
  DotNetPlain,
  FastapiOriginal,
  FastapiPlain,
  FlaskOriginal,
  GoPlain,
  JavaPlain,
  JavascriptPlain,
  KotlinPlain,
  NextjsLine,
  NodejsPlain,
  PhpPlain,
  PythonPlain,
  ReactOriginal,
  RubyPlain,
  RustPlain,
  SwiftPlain,
  TypescriptPlain,
  VuejsOriginal
} from "devicons-react";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

interface Framework {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const allFrameworks: Framework[] = [
  {value: 'REACTJS', label: 'React.js', icon: <ReactOriginal size={20} color="slategrey"/>},
  {value: 'NODEJS', label: 'Node.js', icon: <NodejsPlain size={20} color="slategrey"/>},
  {value: 'RESTAPI', label: 'REST API', icon: <FastapiPlain size={20} color="slategrey"/>},
  {value: 'NEXTJS', label: 'Next.js', icon: <NextjsLine size={20} color="slategrey"/>},
  {value: 'PYTHON', label: 'Python', icon: <PythonPlain size={20} color="slategrey"/>},
  {value: 'DJANGO', label: 'Django', icon: <DjangoPlain size={20} color="slategrey"/>},
  {value: 'FLASK', label: 'Flask', icon: <FlaskOriginal size={20} color="slategrey"/>},
  {value: 'FASTAPI', label: 'FastAPI', icon: <FastapiOriginal size={20} color="slategrey"/>},
  {value: 'ASPDOTNET', label: 'ASP.NET', icon: <DotNetPlain size={20} color="slategrey"/>},
  {value: 'TYPESCRIPT', label: 'TypeScript', icon: <TypescriptPlain size={20} color="slategrey"/>},
  {value: 'JAVASCRIPT', label: 'JavaScript', icon: <JavascriptPlain size={20} color="slategrey"/>},
  {value: 'CPLUSPLUS', label: 'C++', icon: <CplusplusPlain size={20} color="slategrey"/>},
  {value: 'CSHARP', label: 'C#', icon: <CsharpPlain size={20} color="slategrey"/>},
  {value: 'RUST', label: 'Rust', icon: <RustPlain size={20} color="slategrey"/>},
  {value: 'JAVA', label: 'Java', icon: <JavaPlain size={20} color="slategrey"/>},
  {value: 'PHP', label: 'PHP', icon: <PhpPlain size={20} color="slategrey"/>},
  {value: 'RUBY', label: 'Ruby', icon: <RubyPlain size={20} color="slategrey"/>},
  {value: 'GOLANG', label: 'Go', icon: <GoPlain size={20} color="slategrey"/>},
  {value: 'SWIFT', label: 'Swift', icon: <SwiftPlain size={20} color="slategrey"/>},
  {value: 'KOTLIN', label: 'Kotlin', icon: <KotlinPlain size={20} color="slategrey"/>},
  {value: 'DART', label: 'Dart', icon: <DartPlain size={20} color="slategrey"/>},
  {value: 'ANGULAR', label: 'Angular', icon: <AngularjsPlain size={20} color="slategrey"/>},
  {value: 'VUE', label: 'Vue.js', icon: <VuejsOriginal size={20} color="slategrey"/>},
  {value: 'DOTNET', label: '.NET', icon: <DotnetcorePlain size={20} color="slategrey"/>},
];

interface FrameworkProps {
  frameworks: string[];
}

const FrameworkList: React.FC<FrameworkProps> = ({ frameworks }) => {
  // Filter the list of allFrameworks based on the provided values
  const filteredFrameworks: Framework[] = allFrameworks.filter((framework) =>
    frameworks.includes(framework.value)
  );

  return (
    <div className="framework-list">
      <div className="flex -space-x-1 overflow-hidden">
        {filteredFrameworks.map((framework) => (
          <Popover key={framework.value}>
              <PopoverTrigger>
                <div
                  className="flex items-center justify-center w-7 h-7 bg-foreground items-center rounded-full ring-2 ring-background"
                >
                  {framework.icon}
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2 font-light text-xs">
                <p>{framework.label}</p>
              </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  );
};

export const FrameworkDetailsList: React.FC<FrameworkProps> = ({ frameworks }) => {
  // Filter the list of allFrameworks based on the provided values
  const filteredFrameworks: Framework[] = allFrameworks.filter((framework) =>
    frameworks.includes(framework.value)
  );

  return (
    <div className="framework-list">
      <div className="flex flex-wrap">
        {filteredFrameworks.map((framework) => (
            <div key={framework.value} className="mr-2">
              {framework.label}
            </div>
        ))}
      </div>
    </div>
  );
};

export default FrameworkList;