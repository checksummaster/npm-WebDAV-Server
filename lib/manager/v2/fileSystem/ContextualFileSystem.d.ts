/// <reference types="node" />
import { Readable, Writable } from 'stream';
import { RequestContext } from '../../../server/v2/RequestContext';
import { LockKind } from '../../../resource/lock/LockKind';
import { Lock } from '../../../resource/lock/Lock';
import { Path } from '../Path';
import { ReturnCallback, SimpleCallback, Return2Callback, OpenWriteStreamMode, SubTree, ResourceType } from './CommonTypes';
import { FileSystemSerializer, ISerializableFileSystem } from './Serialization';
import { FileSystem } from './FileSystem';
import { Resource } from './Resource';
import { IPropertyManager } from './PropertyManager';
import { ILockManager } from './LockManager';
export declare class ContextualFileSystem implements ISerializableFileSystem {
    fs: FileSystem;
    context: RequestContext;
    constructor(fs: FileSystem, context: RequestContext);
    resource(path: Path | string): Resource;
    delete(path: Path | string, callback: SimpleCallback): void;
    delete(path: Path | string, depth: number, callback: SimpleCallback): void;
    openWriteStream(path: Path | string, callback: Return2Callback<Writable, boolean>): void;
    openWriteStream(path: Path | string, estimatedSize: number, callback: Return2Callback<Writable, boolean>): void;
    openWriteStream(path: Path | string, targetSource: boolean, callback: Return2Callback<Writable, boolean>): void;
    openWriteStream(path: Path | string, targetSource: boolean, estimatedSize: number, callback: Return2Callback<Writable, boolean>): void;
    openWriteStream(path: Path | string, mode: OpenWriteStreamMode, callback: Return2Callback<Writable, boolean>): void;
    openWriteStream(path: Path | string, mode: OpenWriteStreamMode, estimatedSize: number, callback: Return2Callback<Writable, boolean>): void;
    openWriteStream(path: Path | string, mode: OpenWriteStreamMode, targetSource: boolean, callback: Return2Callback<Writable, boolean>): void;
    openWriteStream(path: Path | string, mode: OpenWriteStreamMode, targetSource: boolean, estimatedSize: number, callback: Return2Callback<Writable, boolean>): void;
    openReadStream(path: Path | string, callback: ReturnCallback<Readable>): void;
    openReadStream(path: Path | string, estimatedSize: number, callback: ReturnCallback<Readable>): void;
    openReadStream(path: Path | string, targetSource: boolean, callback: ReturnCallback<Readable>): void;
    openReadStream(path: Path | string, targetSource: boolean, estimatedSize: number, callback: ReturnCallback<Readable>): void;
    copy(pathFrom: Path | string, pathTo: Path | string, callback: ReturnCallback<boolean>): void;
    copy(pathFrom: Path | string, pathTo: Path | string, depth: number, callback: ReturnCallback<boolean>): void;
    copy(pathFrom: Path | string, pathTo: Path | string, overwrite: boolean, callback: ReturnCallback<boolean>): void;
    copy(pathFrom: Path | string, pathTo: Path | string, overwrite: boolean, depth: number, callback: ReturnCallback<boolean>): void;
    mimeType(path: Path | string, callback: ReturnCallback<string>): void;
    mimeType(path: Path | string, targetSource: boolean, callback: ReturnCallback<string>): void;
    size(path: Path | string, callback: ReturnCallback<number>): void;
    size(path: Path | string, targetSource: boolean, callback: ReturnCallback<number>): void;
    addSubTree(rootPath: Path | string, subTree: SubTree, callback: SimpleCallback): any;
    addSubTree(rootPath: Path | string, resourceType: ResourceType, callback: SimpleCallback): any;
    create(path: Path | string, type: ResourceType, callback: SimpleCallback): void;
    create(path: Path | string, type: ResourceType, createIntermediates: boolean, callback: SimpleCallback): void;
    etag(path: Path | string, callback: ReturnCallback<string>): void;
    move(pathFrom: Path | string, pathTo: Path | string, callback: ReturnCallback<boolean>): void;
    move(pathFrom: Path | string, pathTo: Path | string, overwrite: boolean, callback: ReturnCallback<boolean>): void;
    rename(pathFrom: Path | string, newName: string, callback: ReturnCallback<boolean>): void;
    rename(pathFrom: Path | string, newName: string, overwrite: boolean, callback: ReturnCallback<boolean>): void;
    availableLocks(path: Path | string, callback: ReturnCallback<LockKind[]>): void;
    lockManager(path: Path | string, callback: ReturnCallback<ILockManager>): void;
    propertyManager(path: Path | string, callback: ReturnCallback<IPropertyManager>): void;
    readDir(path: Path | string, callback: ReturnCallback<string[]>): void;
    readDir(path: Path | string, retrieveExternalFiles: boolean, callback: ReturnCallback<string[]>): void;
    creationDate(path: Path | string, callback: ReturnCallback<number>): void;
    lastModifiedDate(path: Path | string, callback: ReturnCallback<number>): void;
    webName(path: Path | string, callback: ReturnCallback<string>): void;
    displayName(path: Path | string, callback: ReturnCallback<string>): void;
    type(path: Path | string, callback: ReturnCallback<ResourceType>): void;
    listDeepLocks(startPath: Path | string, callback: ReturnCallback<{
        [path: string]: Lock[];
    }>): any;
    listDeepLocks(startPath: Path | string, depth: number, callback: ReturnCallback<{
        [path: string]: Lock[];
    }>): any;
    serializer(): FileSystemSerializer;
    serialize(callback: (serializedData: any) => void): void;
}
