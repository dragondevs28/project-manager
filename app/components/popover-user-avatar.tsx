import React from 'react';
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {EnvelopeClosedIcon} from "@radix-ui/react-icons";
import {Project} from "@/types";

const PopoverUserAvatar = ({project}: {project: Project}) => {
  return (
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Avatar >
              <AvatarImage src={project.assignedToUser?.image!}/>
              <AvatarFallback>DP</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-auto">
            <div className="flex flex-col space-y-4 items-center justify-center">

              <div className="flex justify-center flex-col space-y-2">
                <h4 className="text-sm font-semibold">{project.assignedToUser?.name}</h4>
                <Badge className="text-[10px] w-20 justify-center">
                  {project.assignedToUser?.role}
                </Badge>
                <div className="flex items-center ">
                  <EnvelopeClosedIcon className="mr-2 h-4 w-4 opacity-70"/>{" "}
                  <span className="text-xs text-muted-foreground">
                    {project.assignedToUser?.email}
                  </span>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
  );
};

export default PopoverUserAvatar;
